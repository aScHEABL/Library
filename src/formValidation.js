import {
  bookTitleInput_DOM as title,
  bookAuthorInput_DOM as author,
  bookPageInput_DOM as page,
  bookLanguageInput_DOM as language,
  readOrNotSelect_DOM as read,
  form_DOM,
  errorMessageTitle,
  errorMessageAuthor,
  errorMessagePage,
  errorMessageLanguage,
  errorMessageRead,
} from "./index.js";

export default function formValidation() {
  form_DOM.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  if (
    title.value.length === 0 ||
    author.value.length === 0 ||
    page.value.length === 0 ||
    language.value.length === 0 ||
    read.value.length === 0
  ) {
    if (title.value.length === 0) {
      errorMessageTitle.style.visibility = "visible";
    }
    if (author.value.length === 0) {
      errorMessageAuthor.style.visibility = "visible";
    }
    if (page.value.length === 0) {
      errorMessagePage.style.visibility = "visible";
    }
    if (language.value.length === 0) {
      errorMessageLanguage.style.visibility = "visible";
    }
    if (read.value.length === 0) {
      errorMessageRead.style.visibility = "visible";
    }
    return false;
  } else {
    document.querySelector(`[data-popup-window]`).style.display = `none`;
    return true;
  }
}
