@ECHO off
IF EXIST ChromiumPortable\Data\Temp\ rd ChromiumPortable\Data\Temp\ /s /q >nul
ChromiumPortable\ChromiumPortable.exe --allow-file-access-from-files --kiosk "%~dp0\web\index.html"
