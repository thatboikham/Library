const myLibrary = [];

function book(title, author, pages, readOrUnread){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrUnread = readOrUnread;
}
const myheart = new book("thepearl", "john keypegon", "3466 pages", "read");
const myFavourite = new book("headhead", "happy brirday", "64545 pages", "unread");

function bookToLibrary(){
    myLibrary.push(myheart)
}
bookToLibrary()
console.log(myLibrary)