import {randomNumber, getMaxLengthStr} from "./util.js";

export const createPostsArray = () => {
  const createPost = (idElement) => {

    const statusText = [
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    ];

    const names = [
      'Wow',
      'Petya',
      'XXL',
      'gussi',
      'lololololol',
      'hahaahhaha',
      'pop',
    ];

    return {
      id: idElement,
      avatar: `img/avatar-${randomNumber(1, 6)}.svg`,
      messages: [...Array(randomNumber(1, 10))].map(() => statusText[randomNumber(0, statusText.length)]),
      name: names[randomNumber(0, names.length)],
    }
  }

  return [...Array(25)].map((el, index) => createPost(index + 1));
}
