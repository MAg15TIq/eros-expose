@echo off
echo Converting EXTREME SQUIRT video 1 to H.264/AAC format...
echo.

set FFMPEG=.\ffmpeg\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe
set VIDEOS_DIR=src\videos
set TEMP_DIR=temp_videos

if not exist %TEMP_DIR% mkdir %TEMP_DIR%

echo Converting video...
echo.

REM Convert the video with special character
%FFMPEG% -i "%VIDEOS_DIR%\EXTREME SQUIRT - she Orgasms so Hard, she almost Hit the Ceiling! ´ - Pornhub.com.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\converted_extreme1.mp4"

echo.
echo Checking if conversion was successful...
if exist "%TEMP_DIR%\converted_extreme1.mp4" (
    echo Conversion successful!
    echo Replacing original file...
    move /y "%TEMP_DIR%\converted_extreme1.mp4" "%VIDEOS_DIR%\EXTREME SQUIRT - she Orgasms so Hard, she almost Hit the Ceiling! ´ - Pornhub.com.mp4" > nul
    echo Original file replaced.
) else (
    echo Conversion failed.
)

echo.
echo Conversion process complete!
pause
