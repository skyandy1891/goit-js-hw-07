import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const img = creategalleryItems(galleryItems);
gallery.addEventListener("click", container);
gallery.insertAdjacentHTML("beforeend", img);


function creategalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

function container(e) {
  e.preventDefault();

  if (!e.target.dataset.source) {
    return;
  }
  const card = e.target.dataset.source;
  console.log("cardUrl", card);
  const span = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="100" height="50">
`);
  span.show();
}
console.log(galleryItems);