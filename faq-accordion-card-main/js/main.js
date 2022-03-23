'use strict';

const cards = document.querySelectorAll('.card-space__card button');

cards.forEach(card=>{
  card.addEventListener('click', e=>{

    const p = card.nextElementSibling;
    const img = card.querySelector('img');
    const h2 = card.querySelector('h2');
    // image animations
    if (img.classList.contains('arrowDown') && !img.classList.contains('up')){
      img.classList.remove('arrowDown');
      img.classList.add('arrowUp');
      img.classList.add('up');
    }else if(img.classList.contains('arrowUp')&& img.classList.contains('up')){
      img.classList.add('arrowDown');
      img.classList.remove('arrowUp');
      img.classList.remove('up');
    }

    // paragraph animation
    if(!p.classList.contains('visible') || p.classList.contains('invisible')){
      p.classList.remove('invisible');
      p.classList.add('visible');
      p.style.visibility = 'visible';
      p.style.maxHeight = "2rem";
    }else if(p.classList.contains('visible')){
      p.classList.remove('visible');
      p.classList.add('invisible');
      p.style.maxHeight = "0";
      p.style.visibility = 'hidden';
    }
    console.log(p);
    h2.classList.toggle('active');
  })
})