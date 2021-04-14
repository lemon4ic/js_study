'use strict';

let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
let elemBook2 = book[0].querySelectorAll('li');
let elemBook5 = book[5].querySelectorAll('li');
let elemBook6 = book[2].querySelectorAll('li');
let supHeader = document.querySelectorAll('a');

console.log('books: ', books);
console.log('book: ', book[1]);

books.append(book[2]);
books.prepend(book[1]);
book[4].after(book[3]);


document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";


supHeader[4].innerHTML = "Книга 3. this и Прототипы Объектов";

let advertising = document.querySelector('.adv');

advertising.remove();


elemBook2[10].before(elemBook2[2]);
elemBook2[6].before(elemBook2[8]);
elemBook2[7].before(elemBook2[5]);
elemBook2[5].before(elemBook2[4]);
elemBook2[8].before(elemBook2[6]);
elemBook5[1].after(elemBook5[9]);
elemBook5[9].after(elemBook5[3]);
elemBook5[3].after(elemBook5[4]);
elemBook5[7].after(elemBook5[5]);


elemBook6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');


