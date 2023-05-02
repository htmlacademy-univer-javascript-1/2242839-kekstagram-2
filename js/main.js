import { uploadPhoto } from './user-form.js';
import { getData } from './api.js';
import { showAlert } from './utils.js';
import { initFilters } from './filter.js';

getData(initFilters, showAlert);
uploadPhoto();