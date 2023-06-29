import './layout.scss';
import View from '../../../view';
import { ElementParams, RoomObject, RoomObjectArray } from '../../../../../types';
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
  private creatorCode: ElementCreator | null = null;

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
    this.creatorCode = creatorCode;
    this.drawCode();

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

  public onLevelChange(): void {
    this.drawCode();
  }

  public drawCode(): void {
    const currentLevel: RoomObjectArray = LEVELS[STATE.currentLevel];
    this.creatorCode?.setTextContent(this.generateHTMLText([currentLevel]));
  }

  private clearCode(): void {
    if (this.creatorCode) {
      let firstChild = this.creatorCode.getElement()?.firstChild;
      while (firstChild) {
        this.creatorCode.getElement()?.removeChild(firstChild);
        firstChild = this.creatorCode.getElement()?.firstChild;
      }
    }
  }

  private generateHTMLText(structure: RoomObjectArray[]): string {
    let html = '';
    let indentation = 0;

    for (let i = 0; i < structure.length; i += 1) {
      const roomObjects = structure[i];
      html += `${this.indent(indentation)}<div class="room">\n`;
      indentation += 2;

      for (let j = 0; j < roomObjects.length; j += 1) {
        const object = roomObjects[j];
        html += this.generateObjectHTMLText(object, indentation);
      }

      indentation -= 2;
      html += `${this.indent(indentation)}</div>\n`;
    }

    return html;
  }

  private generateObjectHTMLText(object: RoomObject, indentation: number): string {
    let localIndentation = indentation;
    let html = `${this.indent(indentation)}<${object.tagName} class="${object.class}">\n`;

    if (object.inner && object.inner.length > 0) {
      localIndentation += 2;

      for (let i = 0; i < object.inner.length; i += 1) {
        const innerObject = object.inner[i];
        html += this.generateObjectHTMLText(innerObject, localIndentation);
      }

      localIndentation -= 2;
    }

    html += `${this.indent(localIndentation)}</${object.tagName}>\n`;

    return html;
  }

  private indent(indentation: number): string {
    return ' '.repeat(indentation);
  }
}
