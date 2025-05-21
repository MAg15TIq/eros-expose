const fs = require('fs');
const path = require('path');
const util = require('util');
const sizeOf = require('image-size');
const { execSync } = require('child_process');

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
const VIDEO_EXTS = ['.mp4', '.webm', '.ts'];
const IMAGE_DIR = path.join(__dirname, 'src', 'images');
const VIDEO_DIR = path.join(__dirname, 'src', 'videos');
const MANIFEST_PATH = path.join(__dirname, 'manifest.json');
const THUMBNAIL_DIR = path.join(__dirname, 'src', 'thumbnails');

if (!fs.existsSync(THUMBNAIL_DIR)) fs.mkdirSync(THUMBNAIL_DIR);

function walk(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, exts));
    } else {
      if (exts.includes(path.extname(file).toLowerCase())) {
        results.push(filePath);
      }
    }
  });
  return results;
}

function getImageMeta(filePath) {
  try {
    const dimensions = sizeOf(filePath);
    return {
      width: dimensions.width,
      height: dimensions.height,
    };
  } catch {
    return {};
  }
}

function getVideoMeta(filePath) {
  try {
    const ffprobe = `ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration -of json "${filePath}"`;
    const output = execSync(ffprobe).toString();
    const json = JSON.parse(output);
    const stream = json.streams && json.streams[0];
    return {
      width: stream ? stream.width : undefined,
      height: stream ? stream.height : undefined,
      duration: stream ? parseFloat(stream.duration) : undefined,
    };
  } catch {
    return {};
  }
}

function getVideoThumbnail(filePath, outDir) {
  const base = path.basename(filePath, path.extname(filePath));
  const thumbPath = path.join(outDir, base + '.jpg');
  try {
    execSync(`ffmpeg -y -i "${filePath}" -ss 00:00:01.000 -vframes 1 "${thumbPath}"`);
    return thumbPath.replace(__dirname + path.sep, '').replace(/\\/g, '/');
  } catch {
    return null;
  }
}

function relativePath(filePath) {
  return filePath.replace(__dirname + path.sep, '').replace(/\\/g, '/');
}

(async function main() {
  const manifest = [];

  // Images
  const images = walk(IMAGE_DIR, IMAGE_EXTS);
  for (const img of images) {
    const meta = getImageMeta(img);
    manifest.push({
      type: 'image',
      path: relativePath(img),
      ...meta,
      name: path.basename(img),
    });
  }

  // Videos
  const videos = walk(VIDEO_DIR, VIDEO_EXTS);
  for (const vid of videos) {
    const meta = getVideoMeta(vid);
    let thumbnail = getVideoThumbnail(vid, THUMBNAIL_DIR);
    if (!thumbnail) thumbnail = null;
    manifest.push({
      type: 'video',
      path: relativePath(vid),
      thumbnail,
      ...meta,
      name: path.basename(vid),
    });
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`Manifest generated with ${manifest.length} items.`);
})(); 