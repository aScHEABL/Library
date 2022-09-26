import { bookTitleInput_DOM as title,
    bookAuthorInput_DOM as author,
    bookPageInput_DOM as page,
    bookLanguageInput_DOM as language,
    readOrNotSelect_DOM as read } from "./index.js";

export default function clearInputField () {
    title.value = "";
    author.value = "";
    page.value = "";
    language.value = "";
    read.value = "";
}