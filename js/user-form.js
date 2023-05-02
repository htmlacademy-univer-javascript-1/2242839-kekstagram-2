import { commentHandler, hashtagsHandler, pristine, throwErrorMessage } from './validate.js';
import { changeEffects } from './effects-filter.js';
import { addEventScaleButtons, removeEventScaleButtons } from './scale.js';
import { createSlider } from './effects-filter.js';
import { sendData } from './api.js';
import { showMessage } from './utils.js';
import { PhotoValide, FILE_TYPES } from './constants.js';

const fileChooser = document.querySelector('.img-upload__input');
const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const closeButton = form.querySelector('.img-upload__cancel');
const comments = form.querySelector('.text__description');
const hashtags = form.querySelector('.text__hashtags');
const imageForChange = document.querySelector('.img-upload__preview_img');
const submitButton = document.querySelector('.img-upload__submit');
const miniatures = document.querySelectorAll('.effects__preview');

const onHashtagsInput = () => {
  submitButton.disabled = !pristine.validate();
};

const onCommentsInput = () => {
  submitButton.disabled = !pristine.validate();
};

const closePopup = () => {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  form.reset();
  removeEventScaleButtons();
};

const onButtonEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
    document.removeEventListener('keydown', onButtonEscKeydown);
  }
};

const onCloseButtonClick = () => {
  closePopup();
  document.removeEventListener('keydown', onButtonEscKeydown);
};

const checkFieldInFocus = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', onButtonEscKeydown);
  });

  field.addEventListener('blur', () => {
    document.addEventListener('keydown', onButtonEscKeydown);
  });
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          showMessage(PhotoValide.SUCCESS);
          unblockSubmitButton();
          closePopup();
        },
        () => {
          showMessage(PhotoValide.ERROR);
          unblockSubmitButton();
        },
        new FormData(evt.target)
      );
    }
  });
};

const preloadPhoto = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imageForChange.src = URL.createObjectURL(file);
    miniatures.forEach((miniature) => {
      miniature.style.backgroundImage = `url(${imageForChange.src})`;
    });
  }

  imageForChange.removeAttribute('class');
  imageForChange.removeAttribute('style');
  imgUpload.classList.remove('hidden');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onButtonEscKeydown);

  hashtags.addEventListener('input', onHashtagsInput);
  comments.addEventListener('input', onCommentsInput);

  createSlider();
  setUserFormSubmit();
};

const onImgUploadFieldChange = () => {
  body.classList.add('modal-open');

  preloadPhoto();
  checkFieldInFocus(comments);
  checkFieldInFocus(hashtags);
  changeEffects();
  addEventScaleButtons();
};

const uploadPhoto = () => {
  fileChooser.addEventListener('change', onImgUploadFieldChange);
  pristine.addValidator(hashtags, hashtagsHandler, throwErrorMessage);
  pristine.addValidator(comments, commentHandler, throwErrorMessage);
};

export { uploadPhoto };