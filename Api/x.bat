@echo off
set loopcount=10
:loop
echo "hellow world"!
ping -n 2 127.0.0.1>NULL
set /a loopcount=loopcount-1
if %loopcount%==0 goto exitloop
goto loop
:exitloop