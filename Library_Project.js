let myLibrary = [];

function book (title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
      console.log(`"${title}", by: ${author}, ${pages} **${status}**`);
  }

function addBookToLibrary() {
  this.title1 = prompt(`Enter the title of the book`);
  this.author1 = prompt(`Who is the author?`);
  this.pages1 = prompt(`How many pages are in the book?`);
  this.status1 = prompt(`What is the status of reading the book?`);
    console.log(`"${title1}", by: ${author1}, ${pages1}, ${status1}`);
}
