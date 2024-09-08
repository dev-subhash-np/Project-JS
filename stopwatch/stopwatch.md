# HTML Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <style>
        /* Internal CSS */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 90vh;
            background-color: #000000;
        }

        .stopwatch {
            
            text-align: center;
            background-color: #000000;
            padding: 20px;
            border-radius: 10px;
            
        }

        #display {
            font-size: 48px;
            margin-bottom: 20px;
            color: #ffffff;
        }

        .buttons button {
            padding: 10px 20px;
            font-size: 18px;
            margin: 5px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
        }

        .buttons button:hover {
            background-color: #0056b3;
        }

        #fullscreen {
            padding: 10px 20px;
            font-size: 18px;
            margin: 5px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #28a745;
            color: white;
        }

        #fullscreen:hover {
            background-color: #218838;
        }

        @media (min-width:1000px) {
           
            #display{
                font-size: 5rem;
                color: #fff;
                font-family: poppins;
            }
        }
    </style>
</head>

<body>

    <div class="stopwatch">
        <div id="display">00:00:00</div>
        <div class="buttons">
            <button id="start">Start</button>
            <button id="stop">Stop</button>
            <button id="reset">Reset</button>
        </div>
        <button id="fullscreen">Fullscreen</button>

    </div>

    <script src="clock.js"></script>

</body>

</html>


```

# javascript Code

```javascript

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
```