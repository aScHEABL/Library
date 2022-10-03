import {
  addBookBtn_DOM,
  popupCloseBtn_DOM,
  submitBtn_DOM,
  resetBtn_DOM,
  errorMessageTitle,
  errorMessageAuthor,
  errorMessageLanguage,
  errorMessagePage,
  errorMessageRead,
  bookTitleInput_DOM,
  bookAuthorInput_DOM,
  bookPageInput_DOM,
  bookLanguageInput_DOM,
  readOrNotSelect_DOM,
} from "./index.js";
import clearInputField from "./clearInputField.js";
import formValidation from "./formValidation.js";
import { libraryArray, addBookToLibrary } from "./library.js";
import addBooksToLocalStorage from "./localStorageFN.js";
import clearRender from "./clearRender.js";
import renderBooks from "./renderBooks.js";

export default function eventListeners() {
  // Add book button to trigger popup

  addBookBtn_DOM.addEventListener(`click`, () => {
    console.log(`Pop up has been opened`);
    document.querySelector(`[data-popup-window]`).style.display = `flex`;
  });

  // Popup

  popupCloseBtn_DOM.addEventListener(`click`, () => {
    console.log(`Popup has been closed`);
    document.querySelector(`[data-popup-window]`).style.display = `none`;
    errorMessageTitle.style.visibility = "hidden";
    errorMessageAuthor.style.visibility = "hidden";
    errorMessagePage.style.visibility = "hidden";
    errorMessageLanguage.style.visibility = "hidden";
    errorMessageRead.style.visibility = "hidden";
  });

  submitBtn_DOM.addEventListener(`click`, () => {
    if (formValidation() === false) return;
    addBookToLibrary();
    addBooksToLocalStorage(libraryArray);
    clearRender();
    renderBooks();
    clearInputField();
  });

  resetBtn_DOM.addEventListener(`click`, () => {
    console.log(`Reset button has been clicked`);
    errorMessageTitle.style.visibility = "hidden";
    errorMessageAuthor.style.visibility = "hidden";
    errorMessagePage.style.visibility = "hidden";
    errorMessageLanguage.style.visibility = "hidden";
    errorMessageRead.style.visibility = "hidden";
  });

  bookTitleInput_DOM.addEventListener("input", (e) => {
    errorMessageTitle.style.visibility = "hidden";
    if (bookTitleInput_DOM.value.length === 0)
      errorMessageTitle.style.visibility = "visible";
  });

  bookAuthorInput_DOM.addEventListener("input", (e) => {
    errorMessageAuthor.style.visibility = "hidden";
    if (bookAuthorInput_DOM.value.length === 0)
      errorMessageAuthor.style.visibility = "visible";
  });

  bookPageInput_DOM.addEventListener("input", (e) => {
    errorMessagePage.style.visibility = "hidden";
    if (bookPageInput_DOM.value.length === 0)
      errorMessagePage.style.visibility = "visible";
  });

  bookLanguageInput_DOM.addEventListener("input", (e) => {
    errorMessageLanguage.style.visibility = "hidden";
    if (bookLanguageInput_DOM.value.length === 0)
      errorMessageLanguage.style.visibility = "visible";
  });

  readOrNotSelect_DOM.addEventListener("input", (e) => {
    errorMessageRead.style.visibility = "hidden";
    if (readOrNotSelect_DOM.value === "")
      errorMessageRead.style.visibility = "visible";
  });
}
