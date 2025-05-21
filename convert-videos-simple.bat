@echo off
echo Converting videos to H.264/AAC format...

set FFMPEG=.\ffmpeg\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe
set VIDEOS_DIR=src\videos
set TEMP_DIR=temp_videos

if not exist %TEMP_DIR% mkdir %TEMP_DIR%

REM Convert a specific video as a test
echo Converting test video...
%FFMPEG% -i "%VIDEOS_DIR%\Azeri Gelin Otelde Amcini Sikib Agzina Spermani Bosalir - Pornhub.com.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\test_converted.mp4"

echo.
echo Conversion complete. Check the output file.
pause
