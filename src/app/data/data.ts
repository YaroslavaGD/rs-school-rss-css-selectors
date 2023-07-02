import { RoomObjectArray } from '../../types';

export const STATE = {
  currentLevel: 0,
  currentAnswer: new Array<Element>(),
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
          answer: 'true',
        },
      ],
    },
    {
      name: 'rugred',
      tagName: 'rugred',
      class: 'textile',
      inner: [
        {
          name: 'pillow',
          tagName: 'pillow',
          class: 'textile',
          answer: 'true',
        },
      ],
    },
    {
      name: 'rug',
      tagName: 'rug',
      class: 'textile',
      inner: [
        {
          name: 'pillow',
          tagName: 'pillow',
          class: 'textile',
          answer: 'true',
        },
      ],
    },
  ],
  [
    {
      name: 'rug',
      tagName: 'rug',
      class: 'textile',
      answer: 'true',
      inner: [
        {
          name: 'pillow',
          tagName: 'pillow',
          class: 'textile',
          answer: 'true',
          inner: [
            {
              name: 'big-cat',
              tagName: 'cat',
              class: 'animal',
              answer: 'true',
            },
          ],
        },
      ],
    },
    {
      name: 'rugred',
      tagName: 'rugred',
      class: 'textile',
      answer: 'true',
      inner: [
        {
          name: 'pillow',
          tagName: 'pillow',
          class: 'textile-capybara',
          answer: 'true',
          inner: [
            {
              name: 'big-capybara',
              tagName: 'capybara',
              class: 'animal',
              answer: 'true',
            },
          ],
        },
      ],
    },
    {
      name: 'rug',
      tagName: 'rug',
      class: 'textile',
      answer: 'true',
      inner: [
        {
          name: 'pillow',
          tagName: 'pillow',
          class: 'textile',
          answer: 'true',
          inner: [
            {
              name: 'big-dog',
              tagName: 'dog',
              class: 'animal',
              answer: 'true',
            },
          ],
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
      inner: [
        {
          name: 'small-dog',
          tagName: 'dog',
          class: 'small',
        },
        {
          name: 'small-dog',
          tagName: 'dog',
          class: 'small',
        },
        {
          name: 'small-dog',
          tagName: 'dog',
          class: 'small',
        },
      ],
    },
    {
      name: 'big-capybara',
      tagName: 'capybara',
      class: 'animal',
      inner: [
        {
          name: 'small-capybara',
          tagName: 'capybara',
          class: 'small',
        },
        {
          name: 'small-capybara',
          tagName: 'capybara',
          class: 'small',
        },
        {
          name: 'small-capybara',
          tagName: 'capybara',
          class: 'small',
        },
      ],
    },
  ],
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
