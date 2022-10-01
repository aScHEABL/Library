import { bookTitleInput_DOM as title,
bookAuthorInput_DOM as author,
bookPageInput_DOM as page,
bookLanguageInput_DOM as language,
readOrNotSelect_DOM as read,
form_DOM, 
errorMessageTitle,
errorMessageAuthor,
errorMessagePage,
errorMessageLanguage,
errorMessageRead } from "./index.js";

export default function formValidation () {

    form_DOM.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    if (title.value.length === 0 ||
        author.value.length === 0 || 
        page.value.length === 0 || 
        language.value.length === 0 || 
        read.value.length === 0 ) {
            if (title.value.length === 0) {
                errorMessageTitle.textContent = "Book title is required!";
            }
            if (author.value.length === 0) {
                errorMessageAuthor.textContent = "Book author is required!";
            }
            if (page.value.length === 0) {
                errorMessagePage.textContent = "Book page is required!";
            }
            if (language.value.length === 0) {
                errorMessageLanguage.textContent = "Book language is required!";
            }
            if (read.value.length === 0) {
                errorMessageRead.textContent = "You must select at least one option!";
            }
            return true;
        }
}