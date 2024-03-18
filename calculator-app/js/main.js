'use strict';

let numberButtons = document.querySelectorAll('.numpad__number');
let screen = document.getElementById('display');
let result = 0;
let operationBtnPressed = false;
let currentOperation = '';
window.onload = function() {
  screen.focus();
 };
// add event listener to the numbers, when clicked, appear at the end of the screen
numberButtons.forEach(button => {
  button.addEventListener('click', e => {
    console.log(e.target.textContent);
    screen.value += e.target.textContent;
  })
})

//event listener for the dot
let dot = document.getElementById('dot');
dot.addEventListener('click',e=>{
  screen.value = String(screen.value)+e.target.textContent
})

//all other keyboards
let delBtn = document.getElementById('del');
delBtn.addEventListener('click', ()=>screen.value="")

//operations object

let arithmetic = {
  sum: function sum(prev, current){return prev+current},
  substract: function subs(prev, current){return prev-current},
  multiply: function multiply(prev, current){return prev*current},
  divide: function divide(prev, current){return prev/current}
}

//operations buttons
let operationBtns = document.querySelectorAll('.operation_btn');
let operationsArray = ['+','-','X','/'];
operationBtns.forEach(button=> button.addEventListener('click', e=>{
  if (!operationBtnPressed){
    currentOperation = e.target.value;
    result = Number(screen.value);
    screen.value = screen.value + ' ' + e.target.textContent + ' ';
    console.log(currentOperation);
    operationBtnPressed = true;
  }else{
    let newNumber = screen.value.slice(screen.value.indexOf(e.target.textContent,screen.value.length));
    console.log(newNumber);
    console.log(currentOperation);
    screen.value = arithmetic[currentOperation](result,Number(newNumber))
    result = screen.value;
    operationBtnPressed = false;
    currentOperation = ''
  }
}));


// add event listener to dot and symbols
const symbols = []
// aqui lo mas recomendable es que guarde el numero que tenga, si no hay numero, asumir que es un cero, cuando estripe una tecla, guarda como numero el primero, le aplica la operacion apenas el segundo aparece y se oprime igual u otra tecla