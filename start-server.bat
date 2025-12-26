@echo off
echo Starting NJBL Design Website...
echo.

REM Check if Python is available
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Python found. Starting HTTP server on port 8000...
    echo.
    echo Opening browser at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    start http://localhost:8000
    python -m http.server 8000
    goto :end
)

REM Check if Python3 is available
where python3 >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Python3 found. Starting HTTP server on port 8000...
    echo.
    echo Opening browser at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    start http://localhost:8000
    python3 -m http.server 8000
    goto :end
)

REM Check if Node.js/npm is available
where npx >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Node.js found. Starting HTTP server on port 8000...
    echo.
    echo Opening browser at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    start http://localhost:8000
    npx http-server -p 8000
    goto :end
)

REM If no server is available, try to open the file directly
echo No HTTP server found (Python or Node.js required)
echo.
echo Attempting to open index.html directly in browser...
start index.html
goto :end

:end
pause
