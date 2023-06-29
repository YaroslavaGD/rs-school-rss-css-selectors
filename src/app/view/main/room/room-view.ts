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
  private creatorFloor: ElementCreator | null = null;

  constructor() {
    const params: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.ROOM],
    };

    super(params);
    this.configureView();
  }

  public onLevelChange(): void {
    this.clearFloor();
    if (this.creatorFloor) this.draw(this.creatorFloor);
  }

  private configureView(): void {
    const paramsFloor: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.FLOOR],
    };
    this.creatorFloor = new ElementCreator(paramsFloor);
    this.draw(this.creatorFloor);
    this.elementCreator.addInnerElement(this.creatorFloor);
  }

  private draw(creatorContainer: ElementCreator): void {
    const currentLevel: RoomObjectArray = LEVELS[STATE.currentLevel];
    creatorContainer.setCssClass([`level-${STATE.currentLevel}`]);
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

  private clearFloor(): void {
    if (this.creatorFloor) {
      let firstChild = this.creatorFloor.getElement()?.firstChild;
      while (firstChild) {
        this.creatorFloor.getElement()?.removeChild(firstChild);
        firstChild = this.creatorFloor.getElement()?.firstChild;
      }
    }
  }
}
