import { main_DOM } from "./index.js";

import close_Icon from "./images/close-circle-outline.png";

export default function renderBooks () {
    let libraryArrayFromLocalStorage = JSON.parse(localStorage.getItem("libraryLocalStorage"));

    libraryArrayFromLocalStorage.forEach((book, index) => {

        // Book card

        const bookCard_DOM = document.createElement(`div`);
        const removeBtn_DOM = document.createElement(`img`);
        bookCard_DOM.classList.add(`book-card`);
        
        removeBtn_DOM.classList.add(`remove-book-button`);
        removeBtn_DOM.src = close_Icon;

        removeBtn_DOM.addEventListener(`click`, () => {
            myLibrary.splice(bookIndex);
            console.log(`book ${bookIndex} has been removed from the array`);
            main_DOM.removeChild(bookCard_DOM);
        });
        
        main_DOM.append(bookCard_DOM);

        // Label
        
        const bookCardAuthorLabel_DOM = document.createElement(`p`);
        const bookCardPageLabel_DOM = document.createElement(`p`);
        const bookCardLanguageLabel_DOM = document.createElement(`p`);

        bookCardAuthorLabel_DOM.classList.add(`book-card-label`);
        bookCardAuthorLabel_DOM.textContent = `Author: `;
        bookCardPageLabel_DOM.classList.add(`book-card-label`);
        bookCardPageLabel_DOM.textContent = `Pages: `;
        bookCardLanguageLabel_DOM.classList.add(`book-card-label`);
        bookCardLanguageLabel_DOM.textContent = `Language: `;
        
        // Dynamic names
        
        const bookCardTitle_DOM = document.createElement(`h3`);
        const bookCardAuthor_DOM = document.createElement(`p`);
        const bookCardPage_DOM = document.createElement(`p`);
        const bookCardLanguage_DOM = document.createElement(`p`);
        
        bookCardTitle_DOM.classList.add(`book-card-title`);
        bookCardTitle_DOM.textContent = libraryArrayFromLocalStorage[index].title;
        bookCardAuthor_DOM.classList.add(`book-card-author`, `book-card-value`);
        bookCardAuthor_DOM.textContent = libraryArrayFromLocalStorage[index].author;
        bookCardPage_DOM.classList.add(`book-card-page`, `book-card-value`);
        bookCardPage_DOM.textContent = libraryArrayFromLocalStorage[index].page;
        bookCardLanguage_DOM.classList.add(`book-card-language`, `book-card-value`);
        bookCardLanguage_DOM.textContent = libraryArrayFromLocalStorage[index].language;
        
        
        // Checkbox
        
        const toggleContainer_DOM = document.createElement(`div`);
        const toggleP_DOM = document.createElement(`p`);
        const switchLabel_DOM = document.createElement(`label`);
        const checkBox_DOM = document.createElement(`input`);
        
        toggleContainer_DOM.classList.add(`toggle-container`);
        toggleP_DOM.classList.add(`toggle-p`);
        toggleP_DOM.textContent = `Mark as read`;
        checkBox_DOM.type = `checkbox`;
        checkBox_DOM.checked = libraryArrayFromLocalStorage[index].readOrNot;
        
        checkBox_DOM.addEventListener(`change`, () => {
            if (checkBox_DOM.checked === true) {
                libraryArrayFromLocalStorage[index].readOrNot = true;
                console.log(`book ${libraryArray.title[index]} is read!`);
            } else if (checkBox_DOM.checked === false) {
                libraryArrayFromLocalStorage[index].readOrNot = false;
                console.log(`book ${libraryArray.title[index]} is not read!`);
            };
        })
        
        const span_DOM = document.createElement(`span`);
        
        toggleContainer_DOM.append(toggleP_DOM, switchLabel_DOM);
        switchLabel_DOM.append(checkBox_DOM, span_DOM);
        
        bookCard_DOM.append(removeBtn_DOM, bookCardTitle_DOM, bookCardAuthorLabel_DOM, bookCardAuthor_DOM, 
        bookCardPageLabel_DOM, bookCardPage_DOM, bookCardLanguageLabel_DOM, bookCardLanguage_DOM, toggleContainer_DOM);
        
        
    })
}