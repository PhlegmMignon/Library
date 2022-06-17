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


function addBook(title, author, pages, status) {
    

    let counter = 0; 
    myLibrary.push(new Book(title, author, pages, status, counter));
    
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
    authorEle.classList.add('titleEle');
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
    let statusBtn = document.createElement('button');
    statusBtn.classList.add('statusBtn');
    let statusText = document.createTextNode('Unread');
    statusBtn.appendChild(statusText);
    newElement.appendChild(statusBtn);

    //Creates delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    let deleteSvg = document.getElementById('svg');
    deleteBtn.appendChild(deleteSvg);
    newElement.appendChild(deleteBtn);




    //Finally adds the card
    let cardContainer = document.querySelector('#list');
    cardContainer.appendChild(newElement);
    counter++;
}


document.getElementById('readbtn').addEventListener('click', ()=> changeRead());




function changeRead() {
    let readbtn = document.getElementById('readbtn');
    if (readbtn.textContent == 'Read') {
        readbtn.textContent = 'Unread';
        readbtn.style.backgroundColor = '#ffbf69';
        read = 'unread';

        // let thing = document.querySelectorAll('#readbtn');
        // console.log(thing);
    }
    else {
        readbtn.textContent = 'Read';
        readbtn.style.backgroundColor = '#2ec4b6';
        read = 'read';
    }
    // console.log(read);
}

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
let read = 'unread';

const form = document.getElementById('actualTitleForm');

form.addEventListener('submit', (e) => {
    // console.log(title.value, author.value, pages.value, read);
    e.preventDefault();
    addBook(title.value, author.value, pages.value, read);
})


