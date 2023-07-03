import { RoomObjectArray } from '../../types';

export const STATE = {
  currentLevel: 0,
  currentAnswer: new Array<Element>(),
  levelsState: [
    'not-done',
    'not-done',
    'not-done',
    'not-done',
    'not-done',
    'not-done',
    'not-done',
    'not-done',
    'not-done',
    'not-done',
  ],
};

export const HELP_ANSWERS = [
  'capybara',
  '*',
  '.small',
  'dog.animal',
  '#catRibbon',
  'rug capybara',
  'cat, dog',
  '.small + .small',
  'rug > capybara',
  'cat ~ dog',
];

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
      name: 'rugred',
      tagName: 'rugred',
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
              name: 'small-cat',
              tagName: 'cat',
              class: 'small',
              idName: 'catRibbon',
              answer: 'true',
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
    {
      name: 'rugred',
      tagName: 'rugred',
      class: 'textile',
      inner: [
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
          ],
        },
      ],
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
              name: 'big-capybara',
              tagName: 'capybara',
              class: 'animal',
              answer: 'true',
              inner: [
                {
                  name: 'small-capybara',
                  tagName: 'capybara',
                  class: 'small',
                  answer: 'true',
                },
                {
                  name: 'small-capybara',
                  tagName: 'capybara',
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
      name: 'rugred',
      tagName: 'rugred',
      class: 'textile',
      inner: [
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
          ],
        },
        {
          name: 'big-capybara',
          tagName: 'capybara',
          class: 'animal',
        },
      ],
    },
    {
      name: 'rug',
      tagName: 'rug',
      class: 'textile',
      inner: [
        {
          name: 'big-capybara',
          tagName: 'capybara',
          class: 'animal',
          answer: 'true',
          inner: [
            {
              name: 'small-capybara',
              tagName: 'capybara',
              class: 'small',
              answer: 'true',
            },
            {
              name: 'small-capybara',
              tagName: 'capybara',
              class: 'small',
              answer: 'true',
            },
          ],
        },
      ],
    },
  ],
  // === 6 ===
  [
    {
      name: 'rug',
      tagName: 'rug',
      class: 'textile',
      inner: [
        {
          name: 'big-cat',
          tagName: 'cat',
          class: 'animal',
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
      name: 'rug',
      tagName: 'rug',
      class: 'textile',
      inner: [
        {
          name: 'small-capybara',
          tagName: 'capybara',
          class: 'small',
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
          name: 'big-dog',
          tagName: 'dog',
          class: 'animal',
          answer: 'true',
          inner: [
            {
              name: 'small-dog',
              tagName: 'dog',
              class: 'small',
              answer: 'true',
            },
            {
              name: 'small-dog',
              tagName: 'dog',
              class: 'small',
              answer: 'true',
            },
          ],
        },
      ],
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
                  answer: 'true',
                },
                {
                  name: 'small-dog',
                  tagName: 'dog',
                  class: 'small',
                  answer: 'true',
                },
                {
                  name: 'small-dog',
                  tagName: 'dog',
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
                  answer: 'true',
                },
              ],
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
  ],
  // === 8 ===
  [
    {
      name: 'rug',
      tagName: 'rug',
      class: 'textile',
      inner: [
        {
          name: 'small-capybara',
          tagName: 'capybara',
          class: 'small',
          answer: 'true',
        },
        {
          name: 'pillow',
          tagName: 'pillow',
          class: 'textile',
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
              inner: [
                {
                  name: 'small-capybara',
                  tagName: 'capybara',
                  class: 'small',
                },
              ],
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
          name: 'small-cat',
          tagName: 'cat',
          class: 'small',
        },
        {
          name: 'small-capybara',
          tagName: 'capybara',
          class: 'small',
          answer: 'true',
        },
        {
          name: 'small-dog',
          tagName: 'dog',
          class: 'small',
        },
      ],
    },
  ],
  // === 9 ===
  [
    {
      name: 'rugred',
      tagName: 'rugred',
      class: 'textile',
      inner: [
        {
          name: 'big-cat',
          tagName: 'cat',
          class: 'animal',
        },
        {
          name: 'big-dog',
          tagName: 'dog',
          class: 'animal',
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
          name: 'small-cat',
          tagName: 'cat',
          class: 'small',
        },
        {
          name: 'big-dog',
          tagName: 'dog',
          class: 'animal',
          answer: 'true',
        },
        {
          name: 'small-dog',
          tagName: 'dog',
          class: 'small',
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
          name: 'big-capybara',
          tagName: 'capybara',
          class: 'animal',
        },
        {
          name: 'big-dog',
          tagName: 'dog',
          class: 'animal',
        },
      ],
    },
  ],
];
