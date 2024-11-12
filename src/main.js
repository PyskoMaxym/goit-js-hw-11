// main.js

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api.js";
import { renderImages, clearResults } from "./js/render-functions.js";

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.input-search');
const resultsContainer = document.querySelector('.results-container');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.results-container .gallery-item', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const query = searchInput.value.trim();
  
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
    });
    return;
  }

  clearResults(resultsContainer);
  fetchAndDisplayImages(query);
});

function fetchAndDisplayImages(query) {
  loader.style.display = 'block'; // Показуємо індикатор завантаження

  fetchImages(query)
    .then(images => {
      loader.style.display = 'none'; // Ховаємо індикатор завантаження

      if (images.length === 0) {
        iziToast.info({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      renderImages(images, resultsContainer);
      lightbox.refresh(); // Оновлюємо lightbox після додавання нових зображень
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    });
}
