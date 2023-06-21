export type ElementParams = {
  tag: string;
  classesName: ClassesArr;
  textContent: string;
  callback: Callback;
};

export type Callback = <T extends Event>(event?: T) => void;
export type ClassesArr = string[];
