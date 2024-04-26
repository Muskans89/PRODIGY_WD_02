let timer;
let isRunning = false;
let lapCount = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStopBtn").textContent = "Start";
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById("startStopBtn").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function updateTime() {
  const display = document.getElementById("display");
  let time = display.textContent.split(":");
  let hours = parseInt(time[0]);
  let minutes = parseInt(time[1]);
  let seconds = parseInt(time[2]);
  
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  
  display.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return (time < 10) ? "0" + time : time;
}

function lap() {
  const lapsList = document.getElementById("laps");
  const lapTime = document.getElementById("display").textContent;
  const lapItem = document.createElement("li");
  lapItem.textContent = "Lap " + lapCount + ": " + lapTime;
  lapsList.prepend(lapItem);
  lapCount++;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById("startStopBtn").textContent = "Start";
  document.getElementById("display").textContent = "00:00:00";
  lapCount = 1;
  document.getElementById("laps").innerHTML = "";
}
