const myLibrary = [];
const myform = document.getElementById("form");
const availableBooks = document.getElementById("availablebooks");
const box = document.createElement("div");
// const messageDiv = document.createElement("div");
// availableBooks.appendChild(messageDiv);
// messageDiv.classList.add("message");
// messageDiv.innerHTML = "NO BOOKS AVILLABLE PLZ ADD BOOK TO DISPLAY THEM HERE";
availableBooks.appendChild(box);
const submitbtn = document.querySelector(`form [type = "submit"]`);
var selectElement = document.getElementById("read/unread");

function Book(title, author, pages, readOrUnread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrUnread = readOrUnread;
}
myform.addEventListener("submit", (e) => {
  e.preventDefault();
  const formdata = new FormData(myform);

  const title = formdata.get("title");
  const author = formdata.get("author");
  const pages = formdata.get("pages");
  const readOrUnread = selectElement.value;
  // this where the change status of read should be invocked

  createBookcard(title, author, pages, readOrUnread);
  bookToLibrary(title, author, pages, readOrUnread);

  // appendMessageDiv();
  myform.reset();
});

function bookToLibrary(title, author, pages, readOrUnread) {
  const newBook = new Book(title, author, pages, readOrUnread);
  myLibrary.push(newBook);
}

//create cards for the books
let num = -1;
function createBookcard(title, author, pages, readOrUnread) {
  const card = document.createElement("div");
  const btndiv = document.createElement("div");
  const title_p = document.createElement("p");
  const author_p = document.createElement("p");
  const pages_p = document.createElement("p");
  const read_btn = document.createElement("button");
  const delete_btn = document.createElement("button");

  num++;
  card.setAttribute("data-number", num);

  card.classList.add("card");
  box.classList.add("box");
  delete_btn.classList.add("delete");
  read_btn.classList.add("read_unread");
  btndiv.classList.add("btndiv");
  box.appendChild(card);

  title_p.textContent = `${capitalize(title)}`;
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

  changeStatus(read_btn, card);
  changeColors(read_btn);
  deleteBook(card, delete_btn);
}

function showmaincontent(contentID) {
  const mainContent = document.getElementById("mainContent");
  const allContentElement = mainContent.querySelectorAll(".content");

  for (let i = 0; i < allContentElement.length; i++) {
    allContentElement[i].style.display = "none";
  }
  selectedContent = document.getElementById(contentID);
  selectedContent.style.display = "block";
}

function deleteBook(card, delete_btn) {
  delete_btn.addEventListener("click", function () {
    let index = Array.from(document.querySelectorAll(".card")).indexOf(card);
    myLibrary.splice(index, 1);
    card.remove();
    // appendMessageDiv();
  });
}

// function appendMessageDiv() {
//   if (myLibrary.length > 0) {
//     availableBooks.removeChild(messageDiv);
//   }
// }

// use execute this function in the form not when creating a div
function changeStatus(read_btn, card) {
  read_btn.addEventListener("click", function () {
    let index = Array.from(document.querySelectorAll(".card")).indexOf(card);
    if (selectElement.value == selectElement.options[0].value) {
      myLibrary[index].readOrUnread = selectElement.options[1].value;
      read_btn.innerHTML = `${myLibrary[index].readOrUnread}`;
      read_btn.style.backgroundColor = "grey";
    } else if (selectElement.value == selectElement.options[1].value) {
      myLibrary[index].readOrUnread = selectElement.options[0].value;
      read_btn.innerHTML = `${myLibrary[index].readOrUnread}`;
      read_btn.style.backgroundColor = " #00cc66";
    }
    read_btn.innerHTML = myLibrary[index].readOrUnread;
    selectElement.value = myLibrary[index].readOrUnread; // Toggle the selected value
  });
}

function changeColors(read_btn) {
  if (selectElement.value == selectElement.options[0].value) {
    read_btn.style.backgroundColor = " #00cc66";
  } else if (selectElement.value == selectElement.options[1].value) {
    read_btn.style.backgroundColor = "grey";
  }
}
function capitalize(word) {
  return word.toUpperCase();
}
function showError(){
  const errorDIv = document.querySelector('.error');
  if(myform.validity.typeMismactch){
    errorDIv.textContent = "please follow the placeholder partern"
  }
  else if(myform.validity.rangeUnderFlow){
    errorDIv.textContent = "pages should be equal or greater than 50"
  }
  else if(myform.validity.rangeOverFlow){
    errorDIv.textContent = "pages should be equal or less than 500"
  }
  else if(myform.validity.tooShort){
    errorDIv.textContent = "the number of characters above is too short to be a name"
  }
  else if(myform.validity.tooLong){
    errorDIv.textContent = "the number of characters above is too Long to be a name"
  }
}
