// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css"; 
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const createGalaryItem = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
    <a class = "gallery__link" href="${original}" >
      <img class="gallery__image" src="${preview}" alt="${description}" >
    </a>
  </li>`
  )
  .join("");

galleryList.innerHTML = createGalaryItem;

galleryList.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}

console.log(galleryItems)

