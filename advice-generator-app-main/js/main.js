'use strict';

const button = document.querySelector('#dice');
const quoteText = document.querySelector('#quote__phrase');
const quoteNumber = document.querySelector('#quote-number');


const fetchQuotes =()=> {
  fetch('https://api.adviceslip.com/advice')
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response.slip);
    quoteText.textContent = `"${response.slip.advice}"`;
    quoteNumber.textContent = response.slip.id;
  })
  .catch(function () {
    quoteText.textContent = "Oops! Try refreshing the page. There was an error"
    quoteNumber.textContent = "0"
  });
}
fetchQuotes();
button.addEventListener('click', fetchQuotes);