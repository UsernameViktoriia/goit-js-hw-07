import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

list.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkup(items) {
  return items
    .map(
      (item) => `
  <li class="gallery__item">
  <a class = "gallery__link" href="${item.original}">
  <img
  class = "gallery__image"
  src="${item.preview}"
data-source="${item.original}"
  alt="${item.description}">
  </a>
  </li>
    `
    )
    .join("");
}

list.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);
  instance.show();
}
