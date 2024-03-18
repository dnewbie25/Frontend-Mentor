'use strict';

let numberButtons = document.querySelectorAll('.numpad__number');
let screen = document.getElementById('display');
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
  console.log(e.target.textContent)
  console.log(screen.value+e.target.textContent);
  screen.value = String(screen.value)+e.target.textContent
})

//all other keyboards
let delBtn = document.getElementById('del');
delBtn.addEventListener('click', ()=>screen.value="")

// add event listener to dot and symbols
const symbols = []
// aqui lo mas recomendable es que guarde el numero que tenga, si no hay numero, asumir que es un cero, cuando estripe una tecla, guarda como numero el primero, le aplica la operacion apenas el segundo aparece y se oprime igual u otra tecla