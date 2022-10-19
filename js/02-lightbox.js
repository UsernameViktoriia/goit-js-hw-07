import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

list.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkup(items) {
  return items
    .map(
      (item) => `
  <a class = "gallery__item" href="${item.original}">
  <img
  class = "gallery__image"
  src="${item.preview}"
  alt="${item.description}">
  </a>
    `
    )
    .join("");
}
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
