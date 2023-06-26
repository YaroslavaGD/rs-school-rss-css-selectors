import './code.scss';
import View from '../../../view';
import { ElementParams } from '../../../../../types';
import ElementCreator from '../../../../util/element-creator';
import { EventType, eventEmitter } from '../../../../event-emitter/event-emitter';

const CssClasses = {
  CODE: 'code',
  CODE_HEADER: 'code__header',
  CODE_NAME: 'code__name',
  CODE_FILENAME: 'code__filename',
  CODE_WINDOW: 'code__window',
  CODE_NUMBERS: 'code__numbers',
  CODE_INPUT: 'code__input',
  CODE_BUTTON: 'code__button',
};

const TEXT_HEADER = {
  NAME: 'CSS',
  FILENAME: 'style.css',
};

const NUM_LINES = 20;

const TEXT_INPUT = 'Type in a CSS selector';
const TEXT_BUTTON = 'Enter';

export default class CodeView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.CODE],
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
      classesName: [CssClasses.CODE_HEADER],
    };
    const creatorHeader = new ElementCreator(paramsHeader);

    const paramsName: ElementParams = {
      tag: 'h3',
      classesName: [CssClasses.CODE_NAME],
      textContent: TEXT_HEADER.NAME,
    };
    const creatorName = new ElementCreator(paramsName);
    creatorHeader.addInnerElement(creatorName);

    const paramsFileName: ElementParams = {
      tag: 'h4',
      classesName: [CssClasses.CODE_FILENAME],
      textContent: TEXT_HEADER.FILENAME,
    };
    const creatorFileName = new ElementCreator(paramsFileName);
    creatorHeader.addInnerElement(creatorFileName);

    this.elementCreator.addInnerElement(creatorHeader);
  }

  private setWindow(): void {
    const paramsWindow: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.CODE_WINDOW],
    };
    const creatorWindow = new ElementCreator(paramsWindow);
    const creatorNumbers = this.getNumbers(NUM_LINES);
    const creatorInput = this.getInput();
    const creatorButton = this.getButton();

    creatorWindow.addInnerElement(creatorNumbers);
    creatorWindow.addInnerElement(creatorInput);
    creatorWindow.addInnerElement(creatorButton);
    this.elementCreator.addInnerElement(creatorWindow);
  }

  private getNumbers(num: number): ElementCreator {
    const paramsNumbers: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.CODE_NUMBERS],
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

  private getInput(): ElementCreator {
    const paramsInput: ElementParams = {
      tag: 'input',
      classesName: [CssClasses.CODE_INPUT],
      textContent: '',
      callback: () => {},
    };
    const creatorInput = new ElementCreator(paramsInput);
    const inputElement = creatorInput.getElement();

    if (inputElement instanceof HTMLInputElement) {
      inputElement.placeholder = TEXT_INPUT;
    }

    return creatorInput;
  }

  private getButton(): ElementCreator {
    const paramsButton: ElementParams = {
      tag: 'button',
      classesName: [CssClasses.CODE_BUTTON],
      textContent: TEXT_BUTTON,
      callback: () => {
        console.log('click enter Btn');
        eventEmitter.emit(EventType.CHANGE_LEVEL);
      },
    };
    const creatorButton = new ElementCreator(paramsButton);

    return creatorButton;
  }
}
