@echo off
echo Converting videos with special characters to H.264/AAC format...
echo.

set FFMPEG=.\ffmpeg\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe
set VIDEOS_DIR=src\videos
set TEMP_DIR=temp_videos

if not exist %TEMP_DIR% mkdir %TEMP_DIR%

echo Converting problematic video...
echo.

REM Convert the videos with special characters
echo Converting video 1/3...
%FFMPEG% -i "%VIDEOS_DIR%\EXTREME SQUIRT - she Orgasms so Hard, she almost Hit the Ceiling! ´ - Pornhub.com.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\converted_special1.mp4"

echo Converting video 2/3...
%FFMPEG% -i "%VIDEOS_DIR%\EXTREME SQUIRTING ORGASMS & ROUGH FUCKING! the BEST SQUIRT COMPILATION on Pornhub - Mimi Cica - Pornhub.com.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\converted_special2.mp4"

echo Converting video 3/3...
%FFMPEG% -i "%VIDEOS_DIR%\EXTREME SQUIRT🚨 Intense Fucking TEEN makes her Cum Hard - Pornhub.com.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\converted_special3.mp4"

echo.
echo Checking if conversions were successful...

REM Check and replace first video
if exist "%TEMP_DIR%\converted_special1.mp4" (
    echo Video 1 conversion successful!
    echo Replacing original file...
    move /y "%TEMP_DIR%\converted_special1.mp4" "%VIDEOS_DIR%\EXTREME SQUIRT - she Orgasms so Hard, she almost Hit the Ceiling! ´ - Pornhub.com.mp4" > nul
    echo Original file replaced.
) else (
    echo Video 1 conversion failed.
)

REM Check and replace second video
if exist "%TEMP_DIR%\converted_special2.mp4" (
    echo Video 2 conversion successful!
    echo Replacing original file...
    move /y "%TEMP_DIR%\converted_special2.mp4" "%VIDEOS_DIR%\EXTREME SQUIRTING ORGASMS & ROUGH FUCKING! the BEST SQUIRT COMPILATION on Pornhub - Mimi Cica - Pornhub.com.mp4" > nul
    echo Original file replaced.
) else (
    echo Video 2 conversion failed.
)

REM Check and replace third video
if exist "%TEMP_DIR%\converted_special3.mp4" (
    echo Video 3 conversion successful!
    echo Replacing original file...
    move /y "%TEMP_DIR%\converted_special3.mp4" "%VIDEOS_DIR%\EXTREME SQUIRT🚨 Intense Fucking TEEN makes her Cum Hard - Pornhub.com.mp4" > nul
    echo Original file replaced.
) else (
    echo Video 3 conversion failed.
)

REM Clean up temp directory
rmdir /s /q %TEMP_DIR%

echo.
echo Conversion process complete!
pause
