import {
  addBookBtn_DOM,
  popupCloseBtn_DOM,
  bookTitleInput_DOM,
  submitBtn_DOM,
  resetBtn_DOM
} from "./index.js";

import { libraryArray, addBookToLibrary } from "./library.js";

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
    addBookToLibrary();
    console.log(libraryArray);
  })

  resetBtn_DOM.addEventListener(`click`, () => {
    console.log(`Reset button has been clicked`);
  })
}
