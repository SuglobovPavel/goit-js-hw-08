import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const boxForGallery = document.querySelector(".gallery");
function renderGallery(images){
   
   let galleryContent = ``;

   images.map( ({preview, description, original}) => {
      galleryContent += `
      <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
   })

   boxForGallery.innerHTML = galleryContent;
}
renderGallery(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: '250'
});