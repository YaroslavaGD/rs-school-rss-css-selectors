import './room.scss';
import { ElementParams } from '../../../../types';
import ElementCreator from '../../../util/element-creator';
import View from '../../view';

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
    this.elementCreator.addInnerElement(creatorFloor);
  }
}
