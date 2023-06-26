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

export type Callback = <T extends Event>(event?: T) => void;
export type ClassesArr = string[];

export type LinkParams = {
  name: string;
  url: string;
};
