'use strict';

// style for the slider in chrome and edge
const pageViews = document.querySelector('#pageviews span');
const finalPrice = document.querySelector('span#final-price');
const slider = document.getElementById('slider');
const backgroundSlider = document.getElementById('background-slider');
const sliderDiv =document.querySelector('.slider');
const billMonthly = document.querySelector('#billing-cycle');
billMonthly.checked = false;
slider.value = 0;
backgroundSlider.value = 0;
// prices object
const prices ={
  "0": {
    pages:"10k",
    price:8,
  },
  "5":{
    pages:"50k",
    price:12,
  },
  "10":{
    pages:"100k",
    price:16,
  },
  "15":{
    pages:"500k",
    price:24,
  },
  "20":{
    pages:"1M",
    price:32,
  },
}

pageViews.textContent = prices["0"].pages;
finalPrice.textContent = `$${prices["0"].price}`;
slider.addEventListener('input',()=>{
  backgroundSlider.value = slider.value;
  pageViews.textContent = prices[slider.value].pages;
  if(billMonthly.checked===true){
    const priceDiscount = prices[slider.value].price * .25;
    finalPrice.textContent = `$${priceDiscount}`;
  }else{
    finalPrice.textContent = `$${prices[slider.value].price}`;
  }
});

billMonthly.addEventListener('input',()=>{
  if (billMonthly.checked === true){
    const priceDiscount = prices[slider.value].price * .25;
    finalPrice.textContent = `$${priceDiscount}`;
  }else{
    finalPrice.textContent = `$${prices[slider.value].price}`;
  }
})