import { openBigPicture } from './big-picture.js';

const getPictureTemplate = ({ id, url, comments, likes }) => `<a href="#" class="picture js-picture" data-id="${id}">
<img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments">${comments.length}</span>
  <span class="picture__likes">${likes}</span>
</p>
</a>`;

let data = [];

const mainContainer = document.querySelector('.js-pictures');
const createThumbnails = (photos) => mainContainer.insertAdjacentHTML('beforeend', photos.map((photo) => getPictureTemplate(photo)).join(''));

const onMainContainerClick = (evt) => {
  const target = evt.target;
  const parent = target.closest('.js-picture');
  if (parent) {
    const id = parent.dataset.id;
    const [photo] = data.filter((element) => element.id === +id);
    openBigPicture(photo);
  }
};

const removeThumbnails = () => {
  const pictures = mainContainer.querySelectorAll('.js-picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
};

const renderPictures = (photos) => {
  data = photos.slice();
  createThumbnails(photos);
  mainContainer.addEventListener('click', onMainContainerClick);
};

export { renderPictures, removeThumbnails };