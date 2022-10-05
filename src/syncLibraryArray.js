import { libraryArray } from "./library.js";
import {
  logBookCount_DOM, 
  logBookReadCount_DOM, 
  logBookNotReadCount_DOM
} from "./index.js"

export function syncLibraryArray() {
  let libraryArrayFromLocalStorage = JSON.parse(
    localStorage.getItem("libraryLocalStorage")
  );

  if (libraryArrayFromLocalStorage == null) libraryArrayFromLocalStorage = [];
  // console.log(libraryArrayFromLocalStorage);
  libraryArray = libraryArrayFromLocalStorage;
}

export function syncLibraryLog () {
  const readArray = libraryArray.map((element) => element.readOrNot)
  let numOfRead = 0;
  let numOfUnread = 0;
  
  for (let i = 0; i < readArray.length; i++) {
    if (readArray[i] === true) numOfRead++;
    if (readArray[i] === false) numOfUnread++;
  }
  logBookCount_DOM.textContent = libraryArray.length;
  logBookReadCount_DOM.textContent = numOfRead;
  logBookNotReadCount_DOM.textContent = numOfUnread;
}