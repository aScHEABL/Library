console.log(`Hello World!`);

let myLibrary = [];
inputArray = [`#input-book-title`, `#input-book-author`, `#input-page-number`, `#input-language`, `#read-or-not`];
const addBookButton_DOM = document.querySelector(`#add-book-button`);
const closePopupButton_DOM = document.querySelector(`#popup-close`);
const sumbitButton_DOM = document.querySelector(`#submit-button`);
const clearButton_DOM = document.querySelector(`#clear-button`);
const input_DOM = inputArray.map((dom_id) => document.querySelector(dom_id));



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
    displayBooksOnPage();
};

let displayBooksOnPage = () => {
    const main_DOM = document.getElementById(`main`);
    myLibrary.forEach((card) => {

        const bookCard_DOM = document.createElement(`div`);
        bookCard_DOM.classList.add(`.book-card`);
        const closeButton_DOM = document.createElement(`img`);
        closeButton_DOM.classList.add(`remove-book-button`);
        const bookCardTitle_DOM = document.createElement(`h3`);
        bookCardTitle_DOM.classList.add(`book-card-title`);
        const bookCardLabel_DOM = document.createElement(`p`);
        bookCardLabel_DOM.classList.add(`book-card-label`);
        const bookCardAuthor_DOM = document.createElement(`p`);
        bookCardAuthor_DOM.classList.add(`book-card-author`);
        bookCardAuthor_DOM.classList.add(`book-card-value`);
        const bookCardPage_DOM = document.createElement(`p`);
        bookCardPage_DOM.classList.add(`book-card-page`);
        bookCardPage_DOM.classList.add(`book-card-value`);
        const bookCardLanguage_DOM = document.createElement(`p`);
        bookCardLanguage_DOM.classList.add(`book-card-language`);
        bookCardLanguage_DOM.classList.add(`book-card-value`);
        const toogleContainer_DOM = document.createElement(`div`);
        toogleContainer_DOM.classList.add(`toggle-container`);
        const toggleP_DOM = document.createElement(`p`);
        toggleP_DOM.classList.add(`toggle-label`);
        const switchLabel_DOM = document.createElement(`label`);
        switchLabel_DOM.classList.add(`switch`);
        const checkBox_DOM = document.createElement(`input`);
        checkBox_DOM.classList.add(`input-book-read-or-not`);
        const span_DOM = document.createElement(`span`);
        span_DOM.classList.add(`slider`);
        span_DOM.classList.add(`round`);

        main_DOM.append(bookCard_DOM);
        bookCard_DOM.append(closeButton_DOM, bookCardTitle_DOM, )
    });
};