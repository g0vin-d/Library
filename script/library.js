let myLibrary = [
    {
      title: "Harry Potter",
      author: "Jk rowling",
      pages: "899",
      readStatus: "not read yet"
    },
    {
      title: "The Old Man and Sea",
      author: "Ernst hemmingway",
      pages: "200",
      readStatus: "read"
    },
    {
      title: "The Hobbit",
      author: "Jrr tolkins",
      pages: "399",
      readStatus: "read"
    }
  ].map((book) => new Book(book));

const container = document.querySelector(".library-container");
const addBtn = document.querySelector(".addbook");

function Book({title, author, pages, readStatus}) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}


// Add a book ----------------------------------------------------->
function addBookToLibrary (e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("number").value;
    let readStatus = document.getElementsByClassName("input-checkbox")[0].checked == true? "read" : "not read";
    if(title=="" || author=="" ||pages==""){
        alert("Fill all the necessary details!")
    } else {
        let object = new Book({title, author, pages, readStatus});
        myLibrary.push(object);
        render();
        document.getElementById("book-form").reset()
    }
}

document.getElementById("submit").addEventListener('click', addBookToLibrary);


// Render books on screen ------------------------------------------------->
function render() {
    //clear container before render
    container.innerHTML = '';

    for ( let prop in myLibrary) {
        s = myLibrary[prop];

        const div = document.createElement('div');
        const Title = document.createElement('div');
        const Author = document.createElement('div');
        const Pages = document.createElement('div');
        const readstat = document.createElement('div');
        const BookTrash = document.createElement('button');

        div.classList.add('library-books');
        BookTrash.classList.add('delBtn','icon-trash','del-btn-style','icon-large');
        readstat.classList.add('readStat');
        let bookKey = makeid(15);
        div.dataset.key = bookKey;
        BookTrash.dataset.key = bookKey;
        myLibrary[prop].key = bookKey;

        Title.textContent = s.title;
        Author.textContent = s.author;
        Pages.textContent = s.pages;
        readstat.textContent = s.readStatus;
        
        div.appendChild(Title);
        div.appendChild(Author);
        div.appendChild(Pages);
        div.appendChild(readstat);
        div.appendChild(BookTrash);
        container.appendChild(div);
       

        BookTrash.addEventListener('click', () => {
            BookTrash.parentElement.remove();
            removeBook();
        })
        readstat.addEventListener('click', () => {
            readstat.textContent = readstat.textContent == 'read'? "not read yet": "read";
        })   
    }
}

addBtn.addEventListener('click', () => {
    openform();
});

// Remove items from Library -------------------------------------------------->
function removeBook(key) {
    myLibrary.splice(
        myLibrary.findIndex(x => x.key = key), 1)
}


//Generate data-key-------------------------------------------------------------->
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 // open form ------------------------------------------------------------->
 function openform() {
    if (addBtn.value == "add") {
        document.querySelector(".container").style.display = "inline-block";
        addBtn.value = "done";
        addBtn.innerHTML = " Done?";
    } else if (addBtn.value == "done") {
        document.querySelector(".container").style.display = "none";
        addBtn.value = "add";
        addBtn.innerHTML = " Add Book";
    }
  }


//Render all the books form library---------------------------------------------->
render();