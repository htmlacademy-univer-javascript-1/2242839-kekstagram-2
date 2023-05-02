import { Filter, MAX_COUNT_RANDOM_PHOTO } from './constants.js';
import { removeThumbnails, renderPictures } from './thumbnails.js';
import { debounce, discussArray, shuffleArray } from './utils.js';

const filtersContainer = document.querySelector('.img-filters--inactive');
const filtersForm = filtersContainer.querySelector('.img-filters__form');

let photos = [];

const getFilteredPhotos = (id) => {
  let filteredPhotos = [];

  switch (id) {
    case Filter.RANDOM:
      filteredPhotos = shuffleArray(photos).slice(0, MAX_COUNT_RANDOM_PHOTO);
      break;
    case Filter.DISCUSSED:
      filteredPhotos = photos.slice().sort(discussArray);
      break;
    default:
      filteredPhotos = photos.slice();
  }

  return filteredPhotos;
};

const onFiltersFormClick = (evt) => {
  const id = evt.target.id;
  removeThumbnails();
  renderPictures(getFilteredPhotos(id));
  filtersContainer.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const initFilters = (data) => {
  renderPictures(data);
  photos = data.slice();
  filtersContainer.classList.remove('img-filters--inactive');
  filtersForm.addEventListener('click', debounce(onFiltersFormClick));
};

export { initFilters };