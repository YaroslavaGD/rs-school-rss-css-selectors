import { RoomObjectArray } from '../../types';

export const STATE = {
  currentLevel: 0,
};

export const LEVELS: RoomObjectArray[] = [
  [
    {
      name: 'rug',
      tagName: 'rug',
      class: 'textile',
      inner: [
        {
          name: 'pillow',
          tagName: 'pillow',
          class: 'textile',
          inner: [
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
              ],
            },
          ],
        },
      ],
    },
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
  ],
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
