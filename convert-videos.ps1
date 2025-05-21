# Video Codec Conversion Script
# Converts MP4 videos to H.264/AAC format for better compatibility

# Parameters
$videoDirectory = "src\videos"
$ffmpegPath = ".\ffmpeg\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe"
$tempDirectory = "temp_videos"

# Check if ffmpeg exists
if (-not (Test-Path -Path $ffmpegPath)) {
    Write-Host "Error: FFmpeg not found at $ffmpegPath" -ForegroundColor Red
    exit 1
}

# Create temp directory if it doesn't exist
if (-not (Test-Path -Path $tempDirectory)) {
    New-Item -Path $tempDirectory -ItemType Directory -Force | Out-Null
    Write-Host "Created temporary directory: $tempDirectory" -ForegroundColor Green
}

# Get all MP4 files in the specified directory
$videoFiles = Get-ChildItem -Path $videoDirectory -Filter "*.mp4" -File

if ($videoFiles.Count -eq 0) {
    Write-Host "No MP4 files found in directory: $videoDirectory" -ForegroundColor Yellow
    exit
}

Write-Host "Found $($videoFiles.Count) MP4 files. Checking codecs..." -ForegroundColor Cyan

# Process each video file
$needsConversion = @()
$alreadyH264 = @()

foreach ($video in $videoFiles) {
    $fullPath = $video.FullName
    $fileName = $video.Name

    Write-Host "Checking codec for: $fileName" -ForegroundColor Cyan

    # Get codec information using ffmpeg
    $codecInfo = & $ffmpegPath -i $fullPath -hide_banner 2>&1

    # Check if the video uses H.264 codec
    if ($codecInfo -match "Video:.*h264|avc1") {
        Write-Host "  ✓ Already using H.264 codec" -ForegroundColor Green
        $alreadyH264 += $fileName
    } else {
        Write-Host "  ✗ Not using H.264 codec - needs conversion" -ForegroundColor Yellow
        $needsConversion += $fullPath
    }
}

Write-Host "`nSummary:" -ForegroundColor Cyan
Write-Host "  - $($alreadyH264.Count) videos already using H.264 codec" -ForegroundColor Green
Write-Host "  - $($needsConversion.Count) videos need conversion" -ForegroundColor Yellow

if ($needsConversion.Count -eq 0) {
    Write-Host "`nNo videos need conversion. Exiting." -ForegroundColor Green
    exit
}

# Auto-confirm for testing
Write-Host "`nDo you want to proceed with converting $($needsConversion.Count) videos to H.264? (Y/N)" -ForegroundColor Yellow
Write-Host "Y (Auto-confirmed for testing)"

# Convert videos that need conversion
$successCount = 0
$failCount = 0

foreach ($videoPath in $needsConversion) {
    $fileName = Split-Path $videoPath -Leaf
    $tempFile = Join-Path -Path $tempDirectory -ChildPath "temp_$fileName"

    Write-Host "`nConverting: $fileName" -ForegroundColor Cyan
    Write-Host "  Original path: $videoPath" -ForegroundColor Cyan
    Write-Host "  Temp file: $tempFile" -ForegroundColor Cyan

    # Convert to H.264/AAC
    $conversionSuccess = $false

    try {
        # Run ffmpeg conversion
        & $ffmpegPath -i $videoPath -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart $tempFile
        $conversionSuccess = $?
    } catch {
        $conversionSuccess = $false
        Write-Host "  ✗ Error during conversion: $_" -ForegroundColor Red
    }

    if ($conversionSuccess -and (Test-Path -Path $tempFile)) {
        # Verify the new file uses H.264
        $newCodecInfo = & $ffmpegPath -i $tempFile -hide_banner 2>&1

        if ($newCodecInfo -match "Video:.*h264|avc1") {
            # Replace the original file with the converted one
            Remove-Item -Path $videoPath -Force
            Move-Item -Path $tempFile -Destination $videoPath -Force

            Write-Host "  ✓ Successfully converted and replaced: $fileName" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "  ✗ Conversion failed: Output file does not use H.264 codec" -ForegroundColor Red
            $failCount++
        }
    } else {
        Write-Host "  ✗ Conversion failed: Output file not created" -ForegroundColor Red
        $failCount++
    }
}

# Clean up temp directory if empty
$remainingTempFiles = Get-ChildItem -Path $tempDirectory -File
if ($remainingTempFiles.Count -eq 0) {
    Remove-Item -Path $tempDirectory -Force
    Write-Host "`nRemoved temporary directory" -ForegroundColor Green
} else {
    Write-Host "`nTemporary directory still contains files and was not removed" -ForegroundColor Yellow
}

# Final summary
Write-Host "`nConversion Complete!" -ForegroundColor Cyan
Write-Host "  - Successfully converted: $successCount videos" -ForegroundColor Green
Write-Host "  - Failed conversions: $failCount videos" -ForegroundColor $(if ($failCount -gt 0) { "Red" } else { "Green" })

if ($failCount -gt 0) {
    Write-Host "`nSome conversions failed. Check the output above for details." -ForegroundColor Yellow
}
