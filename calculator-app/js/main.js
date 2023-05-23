"use strict";
// selectors
const display = document.querySelector("#display");
const toggle = document.querySelector(".triple-toggle");
const buttons = document.querySelectorAll(".numpad__number")
const deleteBtn = document.querySelector("#del");
const resetBtn = document.querySelector("#reset");
const equalBtn = document.querySelector("#equal");

// validates and returns which toggle button is checked
toggle.childNodes.forEach(element => {
    if(element.tagName === 'INPUT'){
      element.addEventListener('click', ()=>{
        return (element.checked)?element.id:null;
      });
    }
  });

// loops over numpad buttons and returns the id 

  buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
      return button.id
    })
  });


// reset the calculator
resetBtn.addEventListener('click',()=>{
  display.value = "";
});

// delete button
deleteBtn.addEventListener('click',()=>{
  let str = display.value;
  display.value = str.slice(0, -1);
});

// numpad to type numbers
buttons.forEach((number)=>{
  if(number.classList.contains("numbers")){
    number.addEventListener('click',()=>{
      if(number.id==="dot" && !display.value.includes(".")){
        display.value += ".";
      }else if(number.id!=="dot"){
        display.value += number.textContent;
      }
    });
  }
});

// keyboard numpad to prevent multiple dots or letters