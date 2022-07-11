console.log(`Hello World!`);

let myLibrary = [];
inputArray = [`#input-book-title`, `#input-book-author`, `#input-page-number`, `#input-language`, `#read-or-not`];
const addBookButton_DOM = document.querySelector(`#add-book-button`);
const closePopupButton_DOM = document.querySelector(`#popup-close`);
const sumbitButton_DOM = document.querySelector(`#submit-button`);
const clearButton_DOM = document.querySelector(`#clear-button`);
const input_DOM = inputArray.map((dom_id) => document.querySelector(dom_id));
const bookTitle_DOM = document.querySelector(`#input-book-title`);



addBookButton_DOM.addEventListener(`click`, () => {
    console.log(`Popup has been opened!`)
    document.querySelector(`#pop-up`).style.display = `flex`;
});

closePopupButton_DOM.addEventListener(`click`, () => {
    console.log(`Popup has been closed!`)
    document.querySelector(`#pop-up`).style.display = `none`;
})

sumbitButton_DOM.addEventListener(`click`, () => {
    console.log(`Book has been submitted!`);
    addBookToLibary();
});

clearButton_DOM.addEventListener(`click`, () => {
    console.log(`Cleared all fields!`)
    clearAllField();
})

function bookConstructor (title, author, page, language, readOrNot) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.language = language;
    this.readOrNot = readOrNot;
};

let addBookToLibary = () => {
    const title = document.getElementById(`input-book-title`).value;
    const author = document.getElementById(`input-book-author`).value;
    const page = document.getElementById(`input-book-page`).value;
    const language = document.getElementById(`input-book-language`).value;
    const readOrNot = document.getElementById(`select-read-or-not`).value;
    myLibrary.push(new bookConstructor(title, author, page, language, readOrNot));
    console.log(myLibrary);
};

let displayBookOnPage = () => {
    const bookCard = document.getElementsByClassName(`book-card`);
    myLibrary.forEach((card) => {

    });
};