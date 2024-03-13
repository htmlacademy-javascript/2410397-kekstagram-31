import { getRandomArrayElement, getRandomInteger } from './util.js';

const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = 30;
const AVATAR_COUNT = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
let id;
const photoId = [];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!'
];

const names = ['Alex', 'Алёна', 'Kris', 'Анатолий Нефёдов', 'GD', 'Мумийтролль', 'Савелий П.', 'Nat-Cat', 'Евгеша'];

const descriptions = [
  'Самое необычное фото в моей жизни',
  'И так каждый день',
  'Never say never'
];

// функция получения рандомного id в заданном диапазоне
const getRandomId = () => {
  if (photoId.length > PHOTOS_COUNT) {
    return "Фотографий больше нет";
  }
  id = getRandomInteger(1, PHOTOS_COUNT);

  while (photoId.includes(id)) {
    id = getRandomInteger(1, PHOTOS_COUNT)
  }

  photoId.push(id)
  return id;
};

// функция для создания комментария
const createComment = () => ({
  id: crypto.randomUUID(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names),
});

// функция для создания объекта описания 1го фото с комментарием
const createPhoto = () => ({
  id: getRandomId(),
  url: `photos/${id}.jpg`,
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(0, COMMENTS_COUNT) }, createComment),
  description: getRandomArrayElement(descriptions),
});

// создаем массив фотографий
const photoArray = () => Array.from({ length: PHOTOS_COUNT }, createPhoto);

export { photoArray };
