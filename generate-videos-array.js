const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, 'src', 'videos');
const thumbsDir = path.join(__dirname, 'src', 'thumbnails');
const scriptsPath = path.join(__dirname, 'scripts.js');

// Get all video files
const videoFiles = fs.readdirSync(videosDir).filter(f => f.match(/\.(mp4|ts)$/i));
// Get all thumbnail files
const thumbFiles = fs.readdirSync(thumbsDir).filter(f => f.match(/\.jpg$/i));

// Map base names to available formats
const videoMap = {};
videoFiles.forEach(file => {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  if (!videoMap[base]) videoMap[base] = {};
  videoMap[base][ext.replace('.', '')] = file;
});

// Build videos array, preferring .mp4 if available
const videosArray = Object.keys(videoMap).map(base => {
  const mp4 = videoMap[base]['mp4'];
  const ts = videoMap[base]['ts'];
  const file = mp4 || ts;
  const thumb = thumbFiles.find(t => path.basename(t, '.jpg') === base);
  return {
    path: `src/videos/${file}`,
    title: file,
    thumbnail: thumb ? `src/thumbnails/${thumb}` : 'src/images/video-fallback.jpg'
  };
});

// Read scripts.js
let scriptsContent = fs.readFileSync(scriptsPath, 'utf8');

// Find the videos array section
const startMarker = /const videos = \[/;
const endMarker = /];/;
const startIdx = scriptsContent.search(startMarker);
if (startIdx === -1) {
  console.error('Could not find start of videos array in scripts.js');
  process.exit(1);
}
const before = scriptsContent.slice(0, startIdx);
const afterIdx = scriptsContent.indexOf('];', startIdx);
if (afterIdx === -1) {
  console.error('Could not find end of videos array in scripts.js');
  process.exit(1);
}
const after = scriptsContent.slice(afterIdx + 2);

// Build new videos array string
let newArray = 'const videos = [\n';
videosArray.forEach(v => {
  newArray += `  { path: '${v.path}', title: '${v.title}', thumbnail: '${v.thumbnail}' },\n`;
});
newArray += '];';

// Write new scripts.js
const newContent = before + newArray + after;
fs.writeFileSync(scriptsPath, newContent, 'utf8');
console.log('scripts.js videos array updated successfully!'); 