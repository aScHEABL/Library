import {
  bookTitleInput_DOM as title,
  bookAuthorInput_DOM as author,
  bookPageInput_DOM as page,
  bookLanguageInput_DOM as language,
  readOrNotSelect_DOM as read,
} from "./index.js";

export let libraryArray = [];

class Book {
  constructor(title, author, page, language, readOrNot) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.language = language;
    this.readOrNot = readOrNot;
  }
}

export function addBookToLibrary() {
  libraryArray.push(new Book(title, author, page, language, read));
}
