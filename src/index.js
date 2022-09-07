import "../style.css";
import eventListeners from "./eventListeners.js";
import close_Icon from "./images/close-circle-outline.png";

console.log(`Hello World!`);

// Popup window variables

export const addBookBtn_DOM = document.querySelector(`[data-add-book-button]`);
export const popupCloseBtn_DOM = document.querySelector(`[data-popup-close]`);
export const bookTitleInput_DOM = document.querySelector(`[data-input-book-title]`);
export const bookAuthorInput_DOM = document.querySelector(`[data-input-book-author]`);
export const bookPageInput_DOM = document.querySelector(`[data-input-book-page]`);
export const bookLanguageInput_DOM = document.querySelector(`[data-input-book-language]`);
export const readOrNotSelect_DOM = document.querySelector(`[data-select-read-or-not]`);
export const submitBtn_DOM = document.querySelector(`[data-submit-button]`);
export const resetBtn_DOM = document.querySelector(`[data-reset-button]`);

// Image src

popupCloseBtn_DOM.src = close_Icon;

// Active functions

eventListeners();