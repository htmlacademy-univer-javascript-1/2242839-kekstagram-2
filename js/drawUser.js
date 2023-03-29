import {createPostsArray} from "./data.js";
import {randomNumber} from "./util.js";


const sampleUser = document.getElementById('picture').content;

const usersPhotos = createPostsArray().map((user) => {
  sampleUser.querySelector('.picture__img').src = user.avatar;
  sampleUser.querySelector('.picture__comments').textContent = String(user.messages.length);
  sampleUser.querySelector('.picture__likes').textContent = String(randomNumber(1, 1000));

  return sampleUser.cloneNode(true);
})

const sectionPhotos = document.querySelector('.pictures');

export const drawUsers = () => usersPhotos.forEach((el) => {
  sectionPhotos.appendChild(el)
});
