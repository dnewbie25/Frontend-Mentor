'use strict';
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click',e=>{
  e.preventDefault();
  const inputFields = Array.from(document.getElementsByTagName('input'));
  // displays the error symbol and message
  inputFields.forEach(field=>{
    if(emptyField(field)){
      const parent = field.parentElement;
      const img = parent.children[1];
      const errorMessage = parent.children[2];
      field.style.borderColor = 'hsl(0, 100%, 74%)';
      img.style.display = 'block';
      errorMessage.style.display = 'block';
    }
  })
});

function validEmail(email){
  const regex = new RegExp(/\S+@\D+\.\D+/,'gi');
  return email.match(regex)??false;
}

function emptyField(field){
  const regex = new RegExp(/\s+/,'gi')
  if (field.value.match(regex) || field.value ===""){
    return true;
  }
  return false;
}

// focus color when typing
Array.from(document.getElementsByTagName('input')).forEach(field=>{
  field.addEventListener('input',e=>{
    // when there is value
    if(emptyField(e.target)){
      const parent = field.parentElement;
      const img = parent.children[1];
      const errorMessage = parent.children[2];
      img.style.display = 'none';
      errorMessage.style.display = 'none';
    }
    // border color when typing and its correct
    if(!emptyField(e.target)){
      const parent = field.parentElement;
      const img = parent.children[1];
      const errorMessage = parent.children[2];
      e.target.style.borderColor = 'hsl(154, 59%, 51%)';
      img.style.display = 'none';
      errorMessage.style.display = 'none';
    }else{
      e.target.style.borderColor = 'hsl(246, 25%, 77%)';
    }
    // email
    if(e.target.type==='email' && validEmail(e.target.value)===false && !emptyField(e.target)){
      const parent = e.target.parentElement;
      const img = parent.children[1];
      const errorMessage = parent.children[2];
      e.target.style.borderColor = 'hsl(0, 100%, 74%)';
      img.style.display = 'block';
      errorMessage.style.display = 'block';
    }
  })
})