'use strict';

// style for the slider in chrome and edge
const slider = document.getElementById('slider');
let sliderValue = 0;
slider.style.setProperty("--value", 0);
slider.addEventListener('input', ()=>{
  sliderValue = slider.value;
  slider.style.setProperty("--value", sliderValue);
});

const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");

r1.addEventListener("input", () => {
  r2.value = r1.value;
  console.log(r1, r2);
});