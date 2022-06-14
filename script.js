let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookDetails = function() {
        console.log(book.title);
    }
}


function addBook() {
    //TODO  pop up

    


}


document.getElementById('addBook').addEventListener('click', () => addBook());
document.getElementById('readbtn').addEventListener('click', ()=> changeRead());




function changeRead() {
    let readbtn = document.getElementById('readbtn');
    if (readbtn.textContent == 'Read') {
        readbtn.textContent = 'Unread';
        readbtn.style.backgroundColor = '#ffbf69';

        // let thing = document.querySelectorAll('#readbtn');
        // console.log(thing);
    }
    else {
        readbtn.textContent = 'Read';
        readbtn.style.backgroundColor = '#2ec4b6';

    }

}