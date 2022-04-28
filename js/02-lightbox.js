import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const img = createGalleryItems(galleryItems);
gallery.addEventListener("click", container);
gallery.insertAdjacentHTML("beforeend", img);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;})
.join("");
}

function container(evt) {
  evt.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250
 });
console.log(lightbox);