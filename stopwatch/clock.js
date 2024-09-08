let startTime, updatedTime, difference;
let interval;
let isRunning = false;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const display = document.getElementById("display");

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date().getTime() - (difference || 0);
        interval = setInterval(updateDisplay, 10);
    }
}

function stop() {
    isRunning = false;
    clearInterval(interval);
    difference = new Date().getTime() - startTime;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    difference = 0;
    display.textContent = "00:00:00";
}
function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);
    
    display.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}


startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);


const fullscreenButton = document.getElementById("fullscreen");

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

fullscreenButton.addEventListener("click", toggleFullscreen);
