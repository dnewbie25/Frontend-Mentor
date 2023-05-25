"use strict";

// selectors
const display = document.querySelector("#display");
const toggle = document.querySelector(".triple-toggle");
const buttons = document.querySelectorAll(".numpad__number")
const deleteBtn = document.querySelector("#del");
const resetBtn = document.querySelector("#reset");
const equalBtn = document.querySelector("#equal");
let result = 0;
let newValue = 0;
displayValueAsNumber(display.value);

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
  result = 0;
  displayValueAsNumber("");
});

// delete button
deleteBtn.addEventListener('click',()=>{
  let str = display.value;
  display.value = str.slice(0, -1);
  displayValueAsNumber(display.value);
});

// numpad to type numbers and symbols
buttons.forEach((button)=>{
  if(button.classList.contains("numbers")){
    button.addEventListener('click',()=>{
      let cursorPosition = display.selectionStart;
      if(button.id==="dot" && !display.value.includes(".")){
        display.value += ".";
        displayValueAsNumber(display.value);
      }else if(button.id!=="dot"){
        display.value += button.textContent;
        displayValueAsNumber(display.value);
      }
    });
  }
});



// keyboard numpad to prevent multiple dots or letters
const keyboard = new KeyboardEvent("keydown");
display.addEventListener("keydown",(e)=>{
  e.preventDefault();
  const numpad = "1234567890";
  if(e.key === "."){
    if(!display.value.includes(".")){
      display.value += "."
    }else if(display.value.includes(".") && e.key !== "."){
      display.value += e.key;
    }
  }else if(numpad.includes(e.key)){
    display.value += e.key;
    displayValueAsNumber(display.value);
  }
  if(e.key ==="Backspace"){
    display.value = display.value.slice(0,-1)
    displayValueAsNumber(display.value);
  }
  if(e.key === "Delete"){
    display.value = "";
    displayValueAsNumber(display.value);
  }
});

// arithmetic, it should validate whether display.value is a number or not, "" != 0
function checkIfNumber(value){
  if(value === "" || Number(value) === NaN){
    return false;
  }
  return true;
}

function displayValueAsNumber(value){
  if(checkIfNumber(value)){
    result = Number(value);
    return result;
  }
  return "Use numbers";
}

// create a variable that keeps track of the current operator symbol displayd, so it can
function operate(currentValue, operator, newValue){
  const operations = {
    "+": (currentValue, newValue)=> currentValue + newValue,
    "-":(currentValue, newValue)=> currentValue - newValue,
    "X":(currentValue, newValue)=> currentValue * newValue,
    "/":(currentValue, newValue)=> currentValue / newValue,
  }

  return operations[operator](currentValue, newValue);
}

// (Number("0.1")+Number("0.2")).toFixed("0.1".slice("0.1".indexOf(".")).length-1)
// "0.3"
// weird result -> (0.1+0.02)
// 0.12000000000000001
// check the one with more decimal places, multiple 1*10^times of number of places each number
// and then divide by the same 1*10^times of decimal places (0.1*100+0.02*100)/100
// 0.12 this is the result of 0.1+0.2 using the method above 

function bothDecimals(num1,num2){
  // search for the decimal point
  const num1Str = num1.toString();
  const num1DotPosition = num1Str.indexOf(".");
  const num2Str =  num2.toString();
  const num2DotPosition = num2Str.indexOf(".")
  if(num1DotPosition > -1  && num2DotPosition > -1){
    return true;
  }
  return false;
}

function lengthAfterDecimalPoint(number){
  const numStr = number.toString();
  return numStr.slice(numStr.indexOf(".")+1, numStr.lenth).length
}

function decimalOperation(num1, operation, num2){
  const num1LengthAfterDecimal = lengthAfterDecimalPoint(num1);
  const num2LengthAfterDecimal = lengthAfterDecimalPoint(num2);

  if(num1LengthAfterDecimal >= num2LengthAfterDecimal){
    const newValues = [num1 * 10**num1LengthAfterDecimal, num2 * 10 ** num1LengthAfterDecimal];
    return operate(newValues[0], operation, newValues[1])/ (10 ** num1LengthAfterDecimal);
  }else{
    const newValues = [num1 * 10**num2LengthAfterDecimal, num2 * 10 ** num2LengthAfterDecimal];
    return operate(newValues[0], operation, newValues[1])/ (10 ** num2LengthAfterDecimal);
  }
}

// operate the current number with the next input value

