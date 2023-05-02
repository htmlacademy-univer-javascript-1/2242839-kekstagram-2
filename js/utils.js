import { ALERT_SHOW_TIME } from './constants.js';

const checkStringLength = (string, length) => string.length <= length;

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = 'Не удалось загрузить фотографии';
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showMessage = (message) => {
  const alertPopup = document.querySelector(`#${message}`).content.querySelector('section');
  alertPopup.classList.add('js-message');
  const popup = alertPopup.cloneNode(true);
  const alertTitle = popup.querySelector('h2');
  const alertButton = popup.querySelector('button');
  popup.style.zIndex = '100';
  alertTitle.style.left = '0';
  alertTitle.style.top = '0';
  alertTitle.style.right = '0';
  alertTitle.style.padding = '10px 3px';
  alertTitle.style.fontSize = '30px';
  alertTitle.style.textAlign = 'center';
  alertTitle.style.color = 'yellow';
  alertButton.style.color = 'red';
  document.body.append(popup);
  const button = popup.querySelector('button');
  document.addEventListener('keydown', onWindowEscKeydown);
  button.addEventListener('click', () => {
    popup.remove();
  });
  setTimeout(() => {
    popup.remove();
  }, ALERT_SHOW_TIME);
};

function onWindowEscKeydown(evt) {
  if (evt.key === 'Escape') {
    document.removeEventListener('keydown', onWindowEscKeydown);
  }
}

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

const discussArray = (firstPic, secondPic) => secondPic.comments.length - firstPic.comments.length;

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle(callback, delayBetweenFrames = 500) {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {checkStringLength, showMessage, showAlert, shuffleArray, discussArray, debounce, throttle };
