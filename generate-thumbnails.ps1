param (
    [Parameter(Mandatory=$false)]
    [string]$videoDirectory = "E:\EROS\src\videos",

    [Parameter(Mandatory=$false)]
    [string]$thumbnailDirectory = "E:\EROS\src\thumbnails",

    [Parameter(Mandatory=$false)]
    [int]$timeInSeconds = 5,

    [Parameter(Mandatory=$false)]
    [string]$format = "jpg",

    [Parameter(Mandatory=$false)]
    [string]$ffmpegPath = "E:\EROS\ffmpeg\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe"
)

# Create the thumbnail directory if it doesn't exist
if (-not (Test-Path -Path $thumbnailDirectory)) {
    New-Item -Path $thumbnailDirectory -ItemType Directory -Force | Out-Null
    Write-Host "Created thumbnail directory: $thumbnailDirectory"
} else {
    Write-Host "Using existing thumbnail directory: $thumbnailDirectory"
}

# Get all video files in the specified directory
$videoExtensions = @(".mp4", ".ts", ".webm", ".avi", ".mkv", ".mov", ".wmv", ".flv", ".m4v", ".mpg", ".mpeg", ".3gp")
$videoFiles = Get-ChildItem -Path $videoDirectory -File | Where-Object { $videoExtensions -contains $_.Extension.ToLower() }

if ($videoFiles.Count -eq 0) {
    Write-Host "No video files found in directory: $videoDirectory"
    exit
}

Write-Host "Found $($videoFiles.Count) video files. Extracting thumbnails..."

# Process each video file
$successCount = 0
$failCount = 0
$skippedCount = 0

foreach ($videoFile in $videoFiles) {
    $thumbnailName = "$($videoFile.BaseName).$format"
    $thumbnailPath = Join-Path -Path $thumbnailDirectory -ChildPath $thumbnailName

    # Skip if thumbnail already exists
    if (Test-Path -Path $thumbnailPath) {
        Write-Host "  Skipping: $($videoFile.Name) - Thumbnail already exists" -ForegroundColor Yellow
        $skippedCount++
        continue
    }

    # Use ffmpeg to extract a thumbnail at the specified time
    try {
        Write-Host "  Extracting thumbnail for: $($videoFile.Name)"
        $ffmpegCommand = "& `"$ffmpegPath`" -i `"$($videoFile.FullName)`" -ss $timeInSeconds -vframes 1 -q:v 2 `"$thumbnailPath`" -y"

        # Execute the command
        $output = Invoke-Expression $ffmpegCommand 2>&1

        if (Test-Path -Path $thumbnailPath) {
            Write-Host "    Created thumbnail: $thumbnailName" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "    Failed to create thumbnail for: $($videoFile.Name)" -ForegroundColor Red
            $failCount++
        }
    } catch {
        Write-Host "    Error processing $($videoFile.Name): $_" -ForegroundColor Red
        $failCount++
    }
}

Write-Host "`nThumbnail extraction complete."
Write-Host "  Success: $successCount"
Write-Host "  Failed: $failCount"
Write-Host "  Skipped (already exist): $skippedCount"
Write-Host "  Total videos processed: $($videoFiles.Count)"
Write-Host "Thumbnails saved to: $thumbnailDirectory"
