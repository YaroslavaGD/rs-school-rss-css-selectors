import './room.scss';
import { ElementParams, RoomObjectArray } from '../../../../types';
import ElementCreator from '../../../util/element-creator';
import View from '../../view';
import { LEVELS, STATE } from '../../../data/data';

const CssClasses = {
  ROOM: 'room',
  FLOOR: 'floor',
};

export default class RoomView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.ROOM],
    };

    super(params);
    this.configureView();
  }

  public onEnterClick(): void {
    console.log('view know it!');
  }

  private configureView(): void {
    const paramsFloor: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.FLOOR],
    };
    const creatorFloor = new ElementCreator(paramsFloor);
    this.draw(creatorFloor);
    this.elementCreator.addInnerElement(creatorFloor);
  }

  private draw(creatorContainer: ElementCreator): void {
    const currentLevel: RoomObjectArray = LEVELS[STATE.currentLevel];
    this.drawElements(creatorContainer, currentLevel);
  }

  private drawElements(parent: ElementCreator, objectElementArr: RoomObjectArray): void {
    objectElementArr.forEach((objectElement) => {
      const paramsElement: ElementParams = {
        tag: objectElement.tagName,
        classesName: [objectElement.class],
      };
      const creatorElement = new ElementCreator(paramsElement);
      if (objectElement.inner) this.drawElements(creatorElement, objectElement?.inner);
      parent.addInnerElement(creatorElement);
    });
  }
}
