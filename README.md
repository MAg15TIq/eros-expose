# Eros Exposé - Static Adult Content Gallery

## Project Overview
Eros Exposé is a static, elegant adult content website for showcasing photos and videos. All content is loaded directly from the `src/images` and `src/videos` folders, making it easy to update the gallery by simply adding or removing files.

## Folder Structure
```
/ (project root)
  /src
    /images    # Place your photo files here (JPEG, PNG, WebP, etc.)
    /videos    # Place your video files here (MP4, WebM, etc.)
  index.html
  photos.html
  videos.html
  styles.css
  scripts.js
  README.md
```

## Robust Content Mechanism
- **Photos:**
  - All images in `src/images` are automatically displayed in the Photos gallery.
  - Clicking a photo opens a robust slideshow modal with prev/next navigation, zoom, keyboard/touch support, and details.
  - Supported formats: JPEG, PNG, WebP (with progressive loading and lazy loading).
- **Videos:**
  - All videos in `src/videos` are shown in the Videos section as cards with thumbnails, duration, and tags.
  - Clicking a video opens a robust HTML5 player in a modal with quality, speed, fullscreen, and volume controls.
  - Supported formats: MP4, WebM (with fallback and progressive loading).
- **No backend required:**
  - The site is fully static. Content is updated by adding/removing files in the respective folders.
  - (Optional) A build script can generate a manifest for large galleries.

## Getting Started
1. Add your images to `src/images` and videos to `src/videos`.
2. Open `index.html` in your browser to view the site.
3. All features (gallery, slideshow, video player) work out-of-the-box for any content you add.

## Auto-Generate Videos Array Script

To help keep your `videos` array in `scripts.js` up to date with the actual files in `src/videos` and `src/thumbnails`, you can use the provided auto-generate script. This script will scan your folders and generate the correct array entries for you.

**Recommended:** For best results, manually add your video and thumbnail entries to the array to ensure correct titles, order, and captions. Use the auto-generate script as a helper if you add many files at once or want to quickly update the array.

### How to Use the Auto-Generate Script

1. Place your video files in `src/videos/` and your thumbnails in `src/thumbnails/`.
2. Run the script:
   ```
   node generate-videos-array.js
   ```
3. The script will output a new `videos` array. Copy and paste this array into your `scripts.js` file, replacing the old one.
4. Manually adjust titles or captions as needed for best display results.

---

For more details, see the style guide and technical plan in the project documentation. 