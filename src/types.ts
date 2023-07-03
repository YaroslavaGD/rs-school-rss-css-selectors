export type ViewParams = {
  tag: string;
  classesName: ClassesArr;
};

export type ElementParams = {
  tag: string;
  classesName: ClassesArr;
  textContent?: string;
  callback?: Callback;
};

export type Callback = (event?: Event) => void;
export type ClassesArr = string[];

export type LinkParams = {
  name: string;
  url: string;
};

export type RoomObject = {
  name: string;
  tagName: string;
  class: string;
  idName?: string;
  answer?: 'true';
  inner?: RoomObject[];
};

export type RoomObjectArray = RoomObject[];

export type LevelState = 'done' | 'not-done' | 'help';
export type LevelsStateArray = LevelState[];
