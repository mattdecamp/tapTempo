/*

OBJECTIVES
  1. User can navigate to webpage
  2. User can "tap" out the tempo they need by:
    a. Clicking the beat with their mouse
  3. The page will display the correct tempo based on the rhythm of the user's taps/clicks.
  4. Page will calculate the average of last five beats.
*/

console.log("Hi, Matt!~");

const page = document.getElementsByTagName("HTML")[0];
const currentCl = document.getElementById("currentClick");
const prevCl = document.getElementById("previousClick");
const tempo = document.getElementById("tempo");
const avg = document.getElementById("average");

let currTime;
let prevTime = new Date();
prevCl.innerText = prevTime;
tempo.innerText = "Start tapping";
let lastFive = [];

page.addEventListener("click", tempoEvent);
page.addEventListener("keydown", tempoEvent);

function tempoEvent(e) {
  let displayTempo = Math.round(calcTempo(currTime, prevTime));
  if (isNaN(displayTempo)) {
    tempo.innerText = "Keep tapping!";
  } else {
    tempo.innerText = displayTempo;
  }
  console.log(`Current Tempo: ${displayTempo}`);
  console.log(`Last Six Tempos: ${lastFive}`);
  let average = Math.round(lastFiveTempos(displayTempo));
  console.log(`Average: ${average}`)
  if (isNaN(average) || average === 0) {
    avg.innerText =  " ";
  }
  else {
    avg.innerText = average;
  }
}

function calcTempo(curr, prev) {
  prevTime = currTime;
  currTime = new Date();
  currentCl.innerText = currTime;
  prevCl.innerText = prevTime;
  let diff = curr - prev;
  let beats = (1000 / diff) * 60;
  console.log(`Current beat: ${beats}`);
  return beats;
}

function lastFiveTempos(tempo) {
  let total = 0;
  let count = 0;
  lastFive.forEach((i) => {
    total += i;
    count++;
  });
  if (lastFive.length >= 5) {
    lastFive.shift();
  }
  if (isNaN(tempo)) {
    return;
  }
  lastFive.push(tempo);
  if (count <= 2) {
    return "";
  }
  return total / count;
}
