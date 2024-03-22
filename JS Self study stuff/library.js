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
const booksParentDiv = document.getElementById('books');
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
  showBooks();
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
  booksParentDiv.innerHTML="";
  for(let i=0;i<myLibrary.length;i++){
    booksParentDiv.appendChild(addBookToDOM(myLibrary[i],i))
  }
}

function addBookToDOM(book, index){
    let bookDiv = document.createElement('div');
    let titleNode = document.createTextNode(book.title);
    let authorNode = document.createTextNode(book.author);
    let pagesNode = document.createTextNode(book.pages);
    let readNode = document.createTextNode(book.read ? 'Read' : 'Not read yet');
    bookDiv.appendChild(titleNode);
    bookDiv.appendChild(authorNode);
    bookDiv.appendChild(pagesNode);
    bookDiv.appendChild(readNode);
    let readBtn = document.createElement('input');
    readBtn.type = 'checkbox';
    readBtn.checked = book.read;
    bookDiv.appendChild(readBtn);
    let deleteBook = document.createElement('button');
    deleteBook.textContent = "DELETE BOOK";
    deleteBook.classList.add('delete_book_btn');
    bookDiv.setAttribute('book-index',index);
    bookDiv.appendChild(deleteBook);
    return bookDiv;
}

document.addEventListener('click', e=>{
  const target = e.target.closest(".delete_book_btn")
  console.log(target.parentNode);
})
