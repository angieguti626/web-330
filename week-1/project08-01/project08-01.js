"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Angelica Gutierrez
      Date:   2 June 2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// timer constructor function containing 2 parameters named min and sec
function timer(min, sec) {
  this.minutes = min; // setting timer.minutes property equal to min
  this.seconds = sec; // setting timer.seconds property equal to sec
  this.timeID = null; // setting timer.timeID property equal to null
}

// runPause Function with 3 parameters named timer, minBox, and secBox
function runPause(timer, minBox, secBox) {

  if (timer.timeID) // if timeID has value
  {
    window.clearInterval(timer.timeID); //  pause the timer
    timer.timeID = null;
  }
  else // start timer
  {
    timer.timeID = window.setInterval(function () {
      countdown(timer, minBox, secBox);
    },
      1000)
  }
}

// countdown function
function countdown(timer, minBox, secBox) {
  // if seconds are greater than 0
  if (timer.seconds > 0) {
    timer.seconds -= 1; // decrease the value of timer.seconds by 1
  }
  // if minutes are greater than 0
  else if (timer.minutes > 0) {
    timer.minutes -= 1; // decrease the value of timer.minutes by 1
    timer.seconds = 59; // set the value of timer.seconds to 59
  }
  else {
    // if timer hits 0, clear
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  }

  minBox.value = timer.minutes; // sets minBox value to minutes
  secBox.value = timer.seconds; // sets secBox value to seconds

}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new timer(minBox.value, secBox.value); // myTimer being new timer

// onchange event handler for minBox that sets myTimer.minutes to minBox.value
minBox.onchange = () => {
  myTimer.minutes = minBox.value;
}

// onchange event handler for secBox that sets myTimer.seconds to secBox.value
secBox.onchange = () => {
  myTimer.seconds = secBox.value;
}

// onclick event handler for the runPauseTimer button
runPauseTimer.onclick = () => {
  runPause(myTimer, minBox, secBox);
}