import { libraryArray } from "./library.js";

export default function syncLibraryArray() {
  let libraryArrayFromLocalStorage = JSON.parse(
    localStorage.getItem("libraryLocalStorage")
  );

  if (libraryArrayFromLocalStorage == null) libraryArrayFromLocalStorage = [];
  // console.log(libraryArrayFromLocalStorage);
  libraryArray = libraryArrayFromLocalStorage;
}
