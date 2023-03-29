/* <template id="picture">
    <a href="#" class="picture">
      <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments"></span>
        <span class="picture__likes"></span>
      </p>
    </a>
  </template>
 */
import {createPostsArray} from "./data.js";
import {randomNumber} from "./util.js";

export const drawUsers = createPostsArray().map((user) => {
  const sampleUser = document.getElementById('picture').content;

  sampleUser.querySelector('.picture__img').src = user.avatar;
  sampleUser.querySelector('.picture__comments').textContent = String(user.messages.length);
  sampleUser.querySelector('.picture__likes').textContent = String(randomNumber(1, 1000));

  return sampleUser.cloneNode(true);
})

const sampleUser = document.getElementById('picture');
