const myLibrary = [
];
const myform = document.getElementById('form');
const availableBooks = document.getElementById('availablebooks');
const box = document.createElement('div')
availableBooks.appendChild(box)
const submitbtn = document.querySelector(`form [type = "submit"]`);
var selectElement = document.getElementById('read/unread');

function Book(title, author, pages, readOrUnread){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrUnread = readOrUnread;
}

myform.addEventListener("submit", (e) => {
    e.preventDefault();
    const formdata = new FormData(myform)

    const title = formdata.get("title");
    const author = formdata.get("author");
    const pages = formdata.get("pages");
    const readOrUnread = selectElement.value;

    createBookcard(title, author, pages, readOrUnread);
    bookToLibrary(title, author, pages, readOrUnread);

    console.log(myLibrary)
});

function bookToLibrary(title, author, pages, readOrUnread){
    const newBook = new Book(title, author, pages, readOrUnread);
    myLibrary.push(newBook);
}

//create cards for the books
let num = -1;
function createBookcard(title, author, pages, readOrUnread){
    const card = document.createElement('div');
    const btndiv = document.createElement('div');
    const title_p = document.createElement('p');
    const author_p = document.createElement('p');
    const pages_p = document.createElement('p');
    const read_btn = document.createElement('button');
    const delete_btn = document.createElement('button');
    
    num++;
    card.setAttribute("data-number", num)
   

    card.classList.add('card');
    box.classList.add('box')
    delete_btn.classList.add('delete')
    read_btn.classList.add('read_unread')
    btndiv.classList.add('btndiv')
    box.appendChild(card);

    title_p.textContent = `Book Title: ${title}`;
    console.log(title)
    author_p.textContent = `Author: ${author}`;
    pages_p.textContent = `No of pages:${pages}`;
    read_btn.innerHTML = `${readOrUnread}`;
    delete_btn.innerHTML = "Delete";



    card.appendChild(title_p);
    card.appendChild(author_p);
    card.appendChild(pages_p);
    card.appendChild(btndiv);
    btndiv.appendChild(read_btn);
    btndiv.appendChild(delete_btn);

    deleteBook(card, delete_btn);
};

function showmaincontent(contentID){
    const mainContent = document.getElementById('mainContent');
    const allContentElement =  mainContent.querySelectorAll('.content')

    for(let i = 0; i < allContentElement.length; i++){
        allContentElement[i].style.display = 'none';
    }
    selectedContent = document.getElementById(contentID);
    console.log(selectedContent)
    selectedContent.style.display = 'block';
};

function deleteBook(card, delete_btn) {
    delete_btn.addEventListener("click", function() {
        let index = Array.from(document.querySelectorAll(".card")).indexOf(card);
        myLibrary.splice(index, 1);
        console.log(myLibrary);
        card.remove();
    });
}




