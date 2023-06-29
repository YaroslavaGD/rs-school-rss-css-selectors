import './layout.scss';
import View from '../../../view';
import { ElementParams, RoomObjectArray } from '../../../../../types';
import ElementCreator from '../../../../util/element-creator';
import { LEVELS, STATE } from '../../../../data/data';

const CssClasses = {
  LAYOUT: 'layout',
  LAYOUT_HEADER: 'layout__header',
  LAYOUT_NAME: 'layout__name',
  LAYOUT_FILENAME: 'layout__filename',
  LAYOUT_WINDOW: 'layout__window',
  LAYOUT_CODE: 'layout__code',
  LAYOUT_NUMBERS: 'layout__numbers',
};

const TEXT_HEADER = {
  NAME: 'HTML',
  FILENAME: 'room.html',
};

const NUM_LINES = 20;

export default class LayoutView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.LAYOUT],
    };
    super(params);
    this.configureView();
  }

  private configureView(): void {
    this.setHeader();
    this.setWindow();
  }

  private setHeader(): void {
    const paramsHeader: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.LAYOUT_HEADER],
    };
    const creatorHeader = new ElementCreator(paramsHeader);

    const paramsName: ElementParams = {
      tag: 'h3',
      classesName: [CssClasses.LAYOUT_NAME],
      textContent: TEXT_HEADER.NAME,
    };
    const creatorName = new ElementCreator(paramsName);
    creatorHeader.addInnerElement(creatorName);

    const paramsFileName: ElementParams = {
      tag: 'h4',
      classesName: [CssClasses.LAYOUT_FILENAME],
      textContent: TEXT_HEADER.FILENAME,
    };
    const creatorFileName = new ElementCreator(paramsFileName);
    creatorHeader.addInnerElement(creatorFileName);

    this.elementCreator.addInnerElement(creatorHeader);
  }

  private setWindow(): void {
    const paramsWindow: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.LAYOUT_WINDOW],
    };
    const creatorWindow = new ElementCreator(paramsWindow);
    const creatorNumbers = this.getNumbers(NUM_LINES);

    creatorWindow.addInnerElement(creatorNumbers);
    const paramsCode: ElementParams = {
      tag: 'pre',
      classesName: [CssClasses.LAYOUT_CODE],
    };
    const creatorCode = new ElementCreator(paramsCode);
    const currentLevel: RoomObjectArray = LEVELS[STATE.currentLevel];
    this.drawCode(creatorCode, currentLevel);

    creatorWindow.addInnerElement(creatorCode);
    this.elementCreator.addInnerElement(creatorWindow);
  }

  private getNumbers(num: number): ElementCreator {
    const paramsNumbers: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.LAYOUT_NUMBERS],
    };
    const creatorNumbers = new ElementCreator(paramsNumbers);

    for (let i = 1; i <= num; i += 1) {
      const itemParams: ElementParams = {
        tag: 'span',
        classesName: [],
        textContent: i.toString(),
      };
      const creatorItem = new ElementCreator(itemParams);
      creatorNumbers.addInnerElement(creatorItem);
    }
    return creatorNumbers;
  }

  private drawCode(creatorParent: ElementCreator, elementsArray: RoomObjectArray): void {
    elementsArray.forEach((element) => {
      const paramsElement: ElementParams = {
        tag: element.tagName,
        classesName: [element.class],
      };
      const creatorElement = new ElementCreator(paramsElement);
      if (element.inner) this.drawCode(creatorElement, element?.inner);
      creatorParent.addInnerElement(creatorElement);
    });
  }
}
