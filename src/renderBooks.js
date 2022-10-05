import { main_DOM } from "./index.js";

import close_Icon from "./images/close-circle-outline.png";

import { libraryArray } from "./library.js";

import clearRender from "./clearRender.js";
import { syncLibraryLog } from "./syncLibraryArray.js";

export default function renderBooks() {
  let libraryArrayFromLocalStorage = JSON.parse(
    localStorage.getItem("libraryLocalStorage")
  );

  if (libraryArrayFromLocalStorage == null) return;
  else {
    libraryArrayFromLocalStorage.forEach((book, index) => {
      // Book card

      const bookCard_DOM = document.createElement(`div`);
      const removeBtn_DOM = document.createElement(`img`);
      bookCard_DOM.classList.add(`book-card`);

      removeBtn_DOM.classList.add(`remove-book-button`);
      removeBtn_DOM.src = close_Icon;

      removeBtn_DOM.addEventListener(`click`, () => {
        libraryArrayFromLocalStorage.splice(index, 1);
        console.log(`book ${book.title} has been removed from the array`);
        libraryArray = libraryArrayFromLocalStorage;
        localStorage.setItem(
          "libraryLocalStorage",
          JSON.stringify(libraryArrayFromLocalStorage)
        );
        clearRender();
        renderBooks();
        syncLibraryLog();
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
      bookCardAuthor_DOM.textContent =
        libraryArrayFromLocalStorage[index].author;
      bookCardPage_DOM.classList.add(`book-card-page`, `book-card-value`);
      bookCardPage_DOM.textContent = libraryArrayFromLocalStorage[index].page;
      bookCardLanguage_DOM.classList.add(
        `book-card-language`,
        `book-card-value`
      );
      bookCardLanguage_DOM.textContent =
        libraryArrayFromLocalStorage[index].language;

      // Checkbox

      const toggleContainer_DOM = document.createElement(`div`);
      const checkBox_DOM = document.createElement(`input`);
      const toggleLabel_DOM = document.createElement(`label`);

      toggleContainer_DOM.classList.add(`toggle-container`);
      checkBox_DOM.classList.add(`toggle-checkbox`);
      toggleLabel_DOM.classList.add(`toggle-label`);
      checkBox_DOM.type = `checkbox`;
      checkBox_DOM.checked = libraryArrayFromLocalStorage[index].readOrNot;

      checkBox_DOM.addEventListener(`change`, () => {
        if (checkBox_DOM.checked === true) {
          libraryArrayFromLocalStorage[index].readOrNot = true;
          libraryArray = libraryArrayFromLocalStorage;
          localStorage.setItem(
            "libraryLocalStorage",
            JSON.stringify(libraryArrayFromLocalStorage)
          );
          clearRender();
          renderBooks();  
          console.log(`book ${libraryArray[index].title} is read!`);
        } else if (checkBox_DOM.checked === false) {
          libraryArrayFromLocalStorage[index].readOrNot = false;
          libraryArray = libraryArrayFromLocalStorage;
          localStorage.setItem(
            "libraryLocalStorage",
            JSON.stringify(libraryArrayFromLocalStorage)
          );
          clearRender();
          renderBooks();  
          console.log(`book ${libraryArray[index].title} is not read!`);
        }
      });

      toggleLabel_DOM.textContent = "Read";

      toggleContainer_DOM.append(checkBox_DOM, toggleLabel_DOM);

      bookCard_DOM.append(
        removeBtn_DOM,
        bookCardTitle_DOM,
        bookCardAuthorLabel_DOM,
        bookCardAuthor_DOM,
        bookCardPageLabel_DOM,
        bookCardPage_DOM,
        bookCardLanguageLabel_DOM,
        bookCardLanguage_DOM,
        toggleContainer_DOM
      );
    });
  }
}
