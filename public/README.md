# Public Directory

This directory contains static assets that should be directly accessible on the deployed site.

## Contents

- `images/` - Contains fallback images and other static images that should be available even when media files are excluded from git
- Add other static assets here as needed

## Usage

Files in this directory will be served directly by Vercel and should be referenced with paths like:

```
public/images/video-fallback.jpg
```

This ensures they're available even when the main media directories are excluded from git.
