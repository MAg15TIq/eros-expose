@echo off
echo Converting all MP4 videos to H.264/AAC format...
echo.

set VIDEO_DIR=src\videos
set TEMP_DIR=temp_videos
set FFMPEG=.\ffmpeg\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe

if not exist %TEMP_DIR% mkdir %TEMP_DIR%

echo Checking and converting videos in %VIDEO_DIR%...
echo.

for %%f in (%VIDEO_DIR%\*.mp4) do (
    echo Processing: %%~nxf
    
    REM Check codec
    %FFMPEG% -i "%%f" -hide_banner 2>&1 | findstr /C:"h264" /C:"avc1" > nul
    if errorlevel 1 (
        echo   - Needs conversion (not H.264)
        echo   - Converting to H.264/AAC...
        
        REM Convert to H.264/AAC
        %FFMPEG% -i "%%f" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\%%~nxf"
        
        REM Check if conversion was successful
        if exist "%TEMP_DIR%\%%~nxf" (
            echo   - Conversion successful
            echo   - Replacing original file...
            del "%%f"
            move "%TEMP_DIR%\%%~nxf" "%%f" > nul
            echo   - File replaced
        ) else (
            echo   - Conversion failed
        )
    ) else (
        echo   - Already using H.264 codec, no conversion needed
    )
    
    echo.
)

REM Clean up temp directory if empty
dir /b "%TEMP_DIR%" 2>nul | findstr "^" > nul
if errorlevel 1 (
    rmdir "%TEMP_DIR%"
    echo Removed temporary directory
) else (
    echo Temporary directory still contains files and was not removed
)

echo.
echo Conversion process complete!
pause
