let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary () {
    let title = prompt("Enter Title");
    let author = prompt("Enter author");
    let pages = prompt("Enter pages");
    let readStatus = prompt("Enter readStatus");
    let object = new Book(title, author, pages, readStatus);
    myLibrary.push(object);
    return myLibrary;
}

//const addBtn = document.querySelector(".addBtn");

//addBtn.addEventListener('click', addBookToLibrary);

myLibrary = [
    { title: "Harry potter", author: "jk rowling", pages: "899", readStatus: "not read yet" },
    { title: "the old man and sea", author: "ernst hemmingway", pages: "200", readStatus: "read" },
    { title: "The Hobbit", author: "jrr tolkins", pages: "399", readStatus: "read" }
]
  
const container = document.querySelector("#lib");

function render(s) {
    const div = document.createElement('div');
    div.classList.add('library-books');
    const s1 = document.createElement('div');
    const s2 = document.createElement('div');
    const s3 = document.createElement('div');
    const s4 = document.createElement('div');
    s1.textContent = s.title;
    s2.textContent = s.author;
    s3.textContent = s.pages;
    s4.textContent = s.readStatus;
    container.appendChild(div);
    div.appendChild(s1);
    div.appendChild(s2);
    div.appendChild(s3);
    div.appendChild(s4);
}

for(let prop in myLibrary) {
    render(myLibrary[prop]);
}