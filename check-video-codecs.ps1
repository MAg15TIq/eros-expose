# Simple script to check video codecs
$videoDirectory = "src\videos"
$ffmpegPath = ".\ffmpeg\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe"

# Check if ffmpeg exists
if (-not (Test-Path -Path $ffmpegPath)) {
    Write-Host "Error: FFmpeg not found at $ffmpegPath"
    exit 1
}

# Get all MP4 files in the specified directory
$videoFiles = Get-ChildItem -Path $videoDirectory -Filter "*.mp4" -File

if ($videoFiles.Count -eq 0) {
    Write-Host "No MP4 files found in directory: $videoDirectory"
    exit
}

Write-Host "Found $($videoFiles.Count) MP4 files. Checking codecs..."

# Process each video file
$needsConversion = @()
$alreadyH264 = @()

foreach ($video in $videoFiles) {
    $fullPath = $video.FullName
    $fileName = $video.Name
    
    Write-Host "Checking codec for: $fileName"
    
    # Get codec information using ffmpeg
    $codecInfo = & $ffmpegPath -i $fullPath -hide_banner 2>&1
    
    # Check if the video uses H.264 codec
    if ($codecInfo -match "Video:.*h264|avc1") {
        Write-Host "  Already using H.264 codec"
        $alreadyH264 += $fileName
    } else {
        Write-Host "  Not using H.264 codec - needs conversion"
        $needsConversion += $fullPath
    }
}

Write-Host "`nSummary:"
Write-Host "  - $($alreadyH264.Count) videos already using H.264 codec"
Write-Host "  - $($needsConversion.Count) videos need conversion"

if ($needsConversion.Count -gt 0) {
    Write-Host "`nVideos that need conversion:"
    foreach ($path in $needsConversion) {
        Write-Host "  - $(Split-Path $path -Leaf)"
    }
}
