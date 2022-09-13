export default function addBooksToLocalStorage (libraryArray) {
    localStorage.setItem("libraryLocalStorage", JSON.stringify(libraryArray));
}