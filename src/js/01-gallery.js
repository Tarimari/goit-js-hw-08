import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

console.dir(SimpleLightbox);

const gallery = document.querySelector(`.gallery`);
gallery.insertAdjacentHTML('afterbegin', makeGallery(galleryItems));
gallery.addEventListener(`click`, handlerClick);

const instance = new SimpleLightbox('.gallery a', {
  captionsDelay: 250,
  captionPosition: "bottom",
});


function makeGallery(gallery) {
    return gallery.map(({preview, original, description}) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
    <img
       class="gallery__image"
       src="${preview}" 
       alt="${description}" 
       title="${description}"
    />
            </a>
</li>`)
        .join(""); 
}

function handlerClick(evt) {
  evt.preventDefault();
  console.dir(evt.target);
  console.log(evt.currentTarget === evt.target);
    if (evt.currentTarget === evt.target) { return; }
    
    instance.open(evt.target.parentElement);
    console.dir(evt.target.parentElement)

}