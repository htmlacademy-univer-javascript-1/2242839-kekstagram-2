import { uploadPhoto } from './user-form.js';
import { getData } from './get-data-api.js';
import { showAlert } from './utils.js';
import { initFilters } from './filter-photos.js';

getData(initFilters, showAlert);
uploadPhoto();
