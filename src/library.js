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
    let readValue = read.options[read.selectedIndex].value;
    // Convert readValue from string to boolean
    readValue = (readValue === "true");
    console.log(`readValue : ${readValue}`);
    // console.log(libraryArray);
    libraryArray.push(
        new Book(title.value, author.value, page.value, language.value, readValue)
    );
}
