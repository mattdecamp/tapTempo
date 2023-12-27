/*

OBJECTIVES
  1. User can navigate to webpage
  2. User can "tap" out the tempo they need by:
    a. Clicking the beat with their mouse
    b. Pressing any key on the keyboard
  3. The page will display the correct tempo based on the rhythm of the user's taps/clicks.
  4. Page will calculate the average of last five beats.
*/

const page = document.getElementsByTagName("HTML")[0];

let currTime = new Date();
let prevTime;
let avgArr = [0];

page.addEventListener("click", tempoEvent);
page.addEventListener("keydown", tempoEvent);

function tempoEvent() {
  const tempo = document.querySelector("#tempo");
  const avg = document.querySelector("#average");
  let displayTempo = calcTempo(currTime, prevTime);
  if (isNaN(displayTempo)) {
    tempo.innerText = "Keep tapping!";
  } else {
    tempo.innerText = displayTempo;
  }
  console.log(`Current Tempo: ${displayTempo}`);
  console.log(`Last Six Tempos: ${avgArr}`);
  let average = averageTempo(displayTempo,avgArr);
  console.log(`Average: ${average}`);
  if (isNaN(average) || average === 0) {
    avg.innerText = " ";
  } else {
    avg.innerText = average;
  }
}

function calcTempo(curr, prev) {
  prevTime = currTime;
  currTime = new Date();
  // currentCl.innerText = currTime;
  // prevCl.innerText = prevTime;
  let diff = curr - prev;
  let beats = (1000 / diff) * 60;
  // console.log(`Current beat: ${beats}`);
  return Math.round(beats);
}

function averageTempo(tempo, arr) {
  let total = 0;
  let count = 0;
  arr.forEach((i) => {
    total += i;
    count++;
  });
  if (arr.length >= 10) {
    arr.shift();
  }
  if (isNaN(tempo)) {
    return;
  }
  arr.push(tempo);
  if (count < 2) {
    return "";
  }
  return Math.round(total / count);
}


module.exports = { calcTempo, averageTempo, tempoEvent }