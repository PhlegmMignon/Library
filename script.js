let myLibrary = []

function Book(title, author, pages, read, i) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.i = i;
    this.bookDetails = function() {
        console.log(book.title);
    }
}

function addBook(title, author, pages, status, i) {
    myLibrary.push(new Book(title, author, pages, status, i));
    
    //Creates initial card
    let newElement = document.createElement('div');
    newElement.classList.add('card');
    
    //Creates title in card
    let titleEle = document.createElement('div');
    titleEle.classList.add('titleEle');
    let titleText = document.createTextNode(title);
    titleEle.appendChild(titleText)
    newElement.appendChild(titleEle);
    
    //Creates author in card 
    let authorEle = document.createElement('div');
    authorEle.classList.add('authorEle');
    let authorText = document.createTextNode(author);
    authorEle.appendChild(authorText)
    newElement.appendChild(authorEle);

    //Creates pages
    let pagesEle = document.createElement('div');
    pagesEle.classList.add('pagesEle');
    let pagesText = document.createTextNode(pages);
    pagesEle.appendChild(pagesText)
    newElement.appendChild(pagesEle);
    
    //Creates status button
    let statusBox = document.createElement('div');
    statusBox.classList.add('statusBox');
    let statusBtn = document.createElement('button');
    statusBtn.classList.add('statusBtn');
    statusBtn.id = 'status' + i;
    let statusText = document.createTextNode('Unread');
    statusBtn.appendChild(statusText);
    statusBox.appendChild(statusBtn);
    newElement.appendChild(statusBox);

        //Status event listener
        statusBtn.addEventListener('click', () => changeStatus(statusBtn.id));

    //Creates delete button
    let deleteEle = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    let deleteBtn = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    deleteEle.classList.add('deleteBtn');
    deleteBtn.setAttribute("d", "M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z");
    deleteBtn.style.strokeWidth = '24px';
    deleteEle.appendChild(deleteBtn);
    newElement.appendChild(deleteEle);

    //Listener for deleting card
    newElement.id = i;
    deleteEle.addEventListener('click', () => {newElement.remove()});

    //Finally adds the card
    let cardContainer = document.querySelector('#list');
    cardContainer.appendChild(newElement);
}

document.getElementById('readbtn').addEventListener('click', ()=> changeRead());

function changeRead() {
    let readbtn = document.getElementById('readbtn');
    if (readbtn.textContent == 'Read') {
        readbtn.textContent = 'Unread';
        readbtn.style.backgroundColor = '#ffbf69';
        read = 'unread';
    }
    else {
        readbtn.textContent = 'Read';
        readbtn.style.backgroundColor = '#2ec4b6';
        read = 'read';
    }
}
function changeStatus(id) {
    let changeBtn = document.getElementById(id);

    if (changeBtn.textContent == 'Read') {
        changeBtn.textContent = 'Unread';
        changeBtn.style.backgroundColor = '#ffbf69';
    }
    else {
        changeBtn.textContent = 'Read';
        changeBtn.style.backgroundColor = '#2ec4b6';
    }
}


const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
let read = 'unread';

const form = document.getElementById('actualTitleForm');

let counter = 0; 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBook(title.value, author.value, pages.value, read, counter);
    counter++;
})


