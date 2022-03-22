'use strict';

// style for the slider in chrome and edge
const slider = document.getElementById('slider');
const backgroundSlider = document.getElementById('background-slider');
const sliderDiv =document.querySelector('.slider');


slider.addEventListener('input',()=>{
  backgroundSlider.value = slider.value;
});

// set slider width

slider.style.width = sliderDiv.offsetWidth;