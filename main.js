import './style.css'
import { myModule } from "./counter.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Click count</h1>
    <div class="card">
      <button id="counter" type="button">Welcome, Clickme!</button>
      <button id="restart" type="button">Restart</button>
    </div>
    <p class="read-the-docs">
      Click count, in over Vite.
    </p>
  </div>
`

let clicked = false;
let clickCount = 0;
let startTime;

document.getElementById("counter").addEventListener("mousedown", function(event) {
  startTime = new Date().getTime();

  const inter = setInterval(() => {
    clickCount++
    if (clicked == true) {clearInterval(inter); clicked = false}
  }, 50)
});

document.getElementById("counter").addEventListener("mouseup", function() {
  const endTime = new Date().getTime();
  const pressDuration = endTime - startTime;

  if (pressDuration > 1000) {
    clicked = true
    
    myModule.setCounter({
      type: "increment",
      element:document.querySelector('#counter'),
      customna:clickCount
    });

  clickCount = 0
  } else {
    myModule.setCounter({
      type: "increment",
      element:document.querySelector('#counter'),
    });

    clicked = true
    clickCount = 0
  }
});

document.getElementById("restart").addEventListener("mousedown", function(event) {
  document.getElementById("restart").setAttribute('disabled', true);
  document.getElementById("counter").setAttribute('disabled', true);

  myModule.setCounter({
    type: "-",
    element: document.querySelector('#counter'),
    element2: document.querySelector('#restart'),
  }, _ => {
    document.getElementById("restart").removeAttribute('disabled');
    document.getElementById("counter").removeAttribute('disabled');
  });
});