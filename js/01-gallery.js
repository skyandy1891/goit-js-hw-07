import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// =========================================================================
const galleryEl = document.querySelector(`div`);

const newLinkImgEl = galleryItems.map((item) => `<a class="gallery__link" href="${item.original}" target="_self">

<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`).join("")

galleryEl.insertAdjacentHTML(`beforeend`, newLinkImgEl)
// ======================================================================