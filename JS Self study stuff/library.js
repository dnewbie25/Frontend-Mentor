'use strict';

const myLibrary =[];

const addBookBtn = document.querySelector('#add_book');
const modal = document.querySelector('#modal');
const closeModalBtn = document.querySelector('#close');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const form = document.getElementById('form');

addBookBtn.addEventListener('click', ()=>{
  modal.showModal();
});

closeModalBtn.addEventListener('click',()=>{
  clearForm();
})

form.addEventListener('submit',function(event){
  event.preventDefault();
  addBookToLibrary();
  clearForm();
});



// construtor for making a book object
function Book(title, author, pages,read=false){
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.info = function(){
    if(!read){
      console.log(`${this.title} by ${this.author}, ${this.pages} pages, not read yet!`);
    }else{
      console.log(`${this.title} by ${this.author}, ${this.pages} pages, read!`);
    }
  }
}
const theHobbit = new Book('The Hobbit','JRR Tolkien','295',true);
// theHobbit.info();

function addBookToLibrary(){
  let newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked
  );
  myLibrary.push(newBook);
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
  modal.close();
}

function clearForm(){
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
  modal.close();
}

function showBooks(){
  for(let item of myLibrary){
    console.log(item);
  }
}

function addBookToDOM(book){
  
}