import "../style.css";
import clearRender from "./clearRender";
import eventListeners from "./eventListeners.js";
import close_Icon from "./images/close-circle-outline.png";
import renderBooks from "./renderBooks";
import {syncLibraryArray, syncLibraryLog} from "./syncLibraryArray";

console.log(`Hello World!`);

// Popup window variables
export const form_DOM = document.querySelector(`[data-form]`);
export const addBookBtn_DOM = document.querySelector(`[data-add-book-button]`);
export const popupCloseBtn_DOM = document.querySelector(`[data-popup-close]`);
export const bookTitleInput_DOM = document.querySelector(
  `[data-input-book-title]`
);
export const bookAuthorInput_DOM = document.querySelector(
  `[data-input-book-author]`
);
export const bookPageInput_DOM = document.querySelector(
  `[data-input-book-page]`
);
export const bookLanguageInput_DOM = document.querySelector(
  `[data-input-book-language]`
);
export const readOrNotSelect_DOM = document.querySelector(
  `[data-select-read-or-not]`
);
export const submitBtn_DOM = document.querySelector(`[data-submit-button]`);
export const resetBtn_DOM = document.querySelector(`[data-reset-button]`);

export const errorMessageTitle = document.querySelector(
  `[data-error-message-title]`
);
export const errorMessageAuthor = document.querySelector(
  `[data-error-message-author]`
);
export const errorMessagePage = document.querySelector(
  `[data-error-message-page]`
);
export const errorMessageLanguage = document.querySelector(
  `[data-error-message-language]`
);
export const errorMessageRead = document.querySelector(
  `[data-error-message-read]`
);

// Webpage DOM

export const main_DOM = document.querySelector(`main`);

// Image src

popupCloseBtn_DOM.src = close_Icon;

// Library Log

export const logBookCount_DOM = document.querySelector(`[data-log-book-count]`);
export const logBookReadCount_DOM = document.querySelector(`[data-log-read-count]`);
export const logBookNotReadCount_DOM = document.querySelector(
  `[data-log-not-read-count]`
);

// Active functions
syncLibraryArray();
clearRender();
renderBooks();
eventListeners();
syncLibraryLog();