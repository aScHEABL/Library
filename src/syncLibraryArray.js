import { libraryArray } from "./library.js";

export default function syncLibraryArray () {
    let libraryArrayFromLocalStorage = JSON.parse(localStorage.getItem("libraryLocalStorage"));
    libraryArray = libraryArrayFromLocalStorage;
}