import {
  addBookBtn_DOM,
  popupCloseBtn_DOM,
  bookTitleInput_DOM,
  submitBtn_DOM,
  resetBtn_DOM,
  readOrNotSelect_DOM
} from "./index.js";
import clearInputField from "./clearInputField.js";
import formValidation from "./formValidation.js";
import { libraryArray, addBookToLibrary } from "./library.js";
import addBooksToLocalStorage from "./localStorageFN.js";
import clearRender from "./clearRender.js";
import renderBooks from "./renderBooks.js";

export default function eventListeners() {
  addBookBtn_DOM.addEventListener(`click`, () => {
    console.log(`Pop up has been opened`);
    document.querySelector(`[data-popup-window]`).style.display = `flex`;
  });

  popupCloseBtn_DOM.addEventListener(`click`, () => {
    console.log(`Popup has been closed`);
    document.querySelector(`[data-popup-window]`).style.display = `none`;
  });

  submitBtn_DOM.addEventListener(`click`, () => {
    console.log(`Book ${bookTitleInput_DOM.value} has been added to library`);
    // formValidation();
    addBookToLibrary();
    addBooksToLocalStorage(libraryArray);
    clearRender();
    renderBooks();
    clearInputField();
  })

  resetBtn_DOM.addEventListener(`click`, () => {
    console.log(`Reset button has been clicked`);
  })
}
