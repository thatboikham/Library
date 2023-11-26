const myLibrary = [];

function Book(title, author, pages, readOrUnread){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrUnread = readOrUnread;
}
const myheart = new Book("thepearl", "john keypegon", "3466 pages", "read");
const myFavourite = new Book("headhead", "happy brirday", "64545 pages", "unread");

function bookToLibrary(){
    myLibrary.push(myheart)
}
bookToLibrary()
console.log(myLibrary)