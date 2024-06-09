'use strict'

const api = prompt('Enter the API key:')
const inputField = document.querySelector('#new_image');
const btn = document.querySelector('#btn');
const giph = document.querySelector('img');

btn.addEventListener('click',callGiph)

function callGiph(){
  // very IMPORTANT to not forget https://
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${api}&s=${inputField.value}`, 
    {mode: "cors"})
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      giph.src=response.data.images.original.url
    })
    .catch((error) => {
      throw new Error('Error found, check the input field or API key and try again.')
    })
}