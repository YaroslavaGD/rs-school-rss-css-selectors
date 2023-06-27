import { RoomObjectArray } from '../../types';

export const STATE = {
  currentLevel: 0,
};

export const LEVELS: RoomObjectArray[] = [
  [
    {
      name: 'big-cat',
      tagName: 'cat',
      class: 'animal',
      inner: [
        {
          name: 'small-cat',
          tagName: 'cat',
          class: 'small',
        },
        {
          name: 'small-cat',
          tagName: 'cat',
          class: 'small',
        },
        {
          name: 'small-cat',
          tagName: 'cat',
          class: 'small',
        },
      ],
    },
    {
      name: 'big-dog',
      tagName: 'dog',
      class: 'animal',
    },
  ],
];
