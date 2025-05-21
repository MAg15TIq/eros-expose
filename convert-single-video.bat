@echo off
echo Converting video to H.264/AAC format...
echo.

set VIDEO_FILE="src\videos\Azeri Gelin Otelde Amcini Sikib Agzina Spermani Bosalir - Pornhub.com.mp4"
set TEMP_FILE="temp_video.mp4"
set FFMPEG=".\ffmpeg\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe"

echo Input file: %VIDEO_FILE%
echo Output file: %TEMP_FILE%
echo.

%FFMPEG% -i %VIDEO_FILE% -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart %TEMP_FILE%

echo.
echo Conversion complete. Check the output file.
pause
