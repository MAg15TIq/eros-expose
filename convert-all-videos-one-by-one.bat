@echo off
echo Converting all videos to H.264/AAC format...
echo.

set FFMPEG=.\ffmpeg\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe
set VIDEOS_DIR=src\videos
set TEMP_DIR=temp_videos

if not exist %TEMP_DIR% mkdir %TEMP_DIR%

echo Converting videos in %VIDEOS_DIR%...
echo.

REM Convert first video
echo Converting video 1/5...
%FFMPEG% -i "%VIDEOS_DIR%\Azeri Gelin Otelde Amcini Sikib Agzina Spermani Bosalir - Pornhub.com.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\converted_1.mp4"
echo Replacing original file...
move /y "%TEMP_DIR%\converted_1.mp4" "%VIDEOS_DIR%\Azeri Gelin Otelde Amcini Sikib Agzina Spermani Bosalir - Pornhub.com.mp4" > nul
echo.

REM Convert second video
echo Converting video 2/5...
%FFMPEG% -i "%VIDEOS_DIR%\Full Video - New Sensations - Quinn Wilde Always Wants it Rough and Hard.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\converted_2.mp4"
echo Replacing original file...
move /y "%TEMP_DIR%\converted_2.mp4" "%VIDEOS_DIR%\Full Video - New Sensations - Quinn Wilde Always Wants it Rough and Hard.mp4" > nul
echo.

REM Convert third video
echo Converting video 3/5...
%FFMPEG% -i "%VIDEOS_DIR%\EXTREME SQUIRT - she Orgasms so Hard, she almost Hit the Ceiling! ´ - Pornhub.com.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\converted_3.mp4"
echo Replacing original file...
move /y "%TEMP_DIR%\converted_3.mp4" "%VIDEOS_DIR%\EXTREME SQUIRT - she Orgasms so Hard, she almost Hit the Ceiling! ´ - Pornhub.com.mp4" > nul
echo.

REM Convert fourth video
echo Converting video 4/5...
%FFMPEG% -i "%VIDEOS_DIR%\BANGBROS - Venezuelan Hottie La Sirena 69 is Fucking Flawless with her Big Ass and Big Tits - Pornhub.com.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\converted_4.mp4"
echo Replacing original file...
move /y "%TEMP_DIR%\converted_4.mp4" "%VIDEOS_DIR%\BANGBROS - Venezuelan Hottie La Sirena 69 is Fucking Flawless with her Big Ass and Big Tits - Pornhub.com.mp4" > nul
echo.

REM Convert fifth video
echo Converting video 5/5...
%FFMPEG% -i "%VIDEOS_DIR%\Hijab Muslim Babe Gets Roughly Dominated - Pornhub.com.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "%TEMP_DIR%\converted_5.mp4"
echo Replacing original file...
move /y "%TEMP_DIR%\converted_5.mp4" "%VIDEOS_DIR%\Hijab Muslim Babe Gets Roughly Dominated - Pornhub.com.mp4" > nul
echo.

REM Clean up temp directory
rmdir %TEMP_DIR%

echo.
echo All conversions complete!
echo All videos are now using H.264/AAC codec for better compatibility.
pause
