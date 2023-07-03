import { RoomObjectArray } from '../../types';

export const STATE = {
  currentLevel: 0,
  currentAnswer: new Array<Element>(),
};

export const LEVELS: RoomObjectArray[] = [
  // === 0 ===
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
      name: 'rugred',
      tagName: 'rugred',
      class: 'textile',
      inner: [
        {
          name: 'pillow',
          tagName: 'pillow',
          class: 'textile',
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
      inner: [
        {
          name: 'pillow',
          tagName: 'pillow',
          class: 'textile',
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
  ],
  // === 1 ===
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
  // === 2 ===
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
                  answer: 'true',
                },
                {
                  name: 'small-cat',
                  tagName: 'cat',
                  class: 'small',
                  answer: 'true',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'small-cat',
      tagName: 'cat',
      class: 'small',
      answer: 'true',
    },
    {
      name: 'big-dog',
      tagName: 'dog',
      class: 'animal',
    },
    {
      name: 'small-cat',
      tagName: 'cat',
      class: 'small',
      answer: 'true',
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
          inner: [
            {
              name: 'small-cat',
              tagName: 'cat',
              class: 'small',
              answer: 'true',
            },
            {
              name: 'small-cat',
              tagName: 'cat',
              class: 'small',
              answer: 'true',
            },
          ],
        },
        {
          name: 'small-cat',
          tagName: 'cat',
          class: 'small',
          answer: 'true',
        },
      ],
    },
  ],
  // === 3 ===
  [
    {
      name: 'rug',
      tagName: 'rug',
      class: 'textile',
      inner: [
        {
          name: 'pillow',
          tagName: 'pillow',
          class: 'textile-capybara',
          inner: [
            {
              name: 'big-capybara',
              tagName: 'capybara',
              class: 'animal',
            },
          ],
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
          class: 'textile-capybara',
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
          ],
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
  // === 4 ===
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
  // === 5 ===
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
  // === 6 ===
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
  // === 7 ===
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
  // === 8 ===
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
  // === 9 ===
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
