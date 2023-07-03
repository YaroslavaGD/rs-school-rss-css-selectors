import './room.scss';
import { ElementParams, RoomObjectArray } from '../../../../types';
import ElementCreator from '../../../util/element-creator';
import View from '../../view';
import { LEVELS, STATE } from '../../../data/data';
import { EventType, eventEmitter } from '../../../event-emitter/event-emitter';

const CssClasses = {
  ROOM: 'room',
  FLOOR: 'floor',
};

export default class RoomView extends View {
  private creatorFloor: ElementCreator | null = null;

  private allElements: HTMLElement[] = new Array<HTMLElement>();

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

  public onUserInput(data?: string): void {
    let isCorrectAnswer = true;
    if (data) {
      const userQuerySelector: NodeListOf<Element> | undefined = this.creatorFloor
        ?.getElement()
        ?.querySelectorAll(data);
      if (userQuerySelector) {
        const userArray: Element[] = Array.from(userQuerySelector);
        userArray.sort(this.compareElementsByDataName);

        if (userArray.length !== STATE.currentAnswer.length) isCorrectAnswer = false;

        if (isCorrectAnswer) {
          for (let i = 0; i < STATE.currentAnswer.length; i += 1) {
            if (userArray[i] !== STATE.currentAnswer[i]) {
              isCorrectAnswer = false;
            }
          }
        }

        if (isCorrectAnswer) {
          eventEmitter.emit(EventType.CORRECT_ANSWER, STATE.currentLevel.toString());
        } else {
          eventEmitter.emit(EventType.WRONG_ANSWER);
        }
      }
    }
  }

  public onAnswerCorrect(): void {
    STATE.currentAnswer.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.classList.add('disappearance');
      }
    });
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
    STATE.currentAnswer = new Array<Element>();
    creatorContainer.setCssClass([`level-${STATE.currentLevel}`]);
    this.drawElements(creatorContainer, currentLevel);
    STATE.currentAnswer.sort(this.compareElementsByDataName);
  }

  private drawElements(parent: ElementCreator, objectElementArr: RoomObjectArray): void {
    objectElementArr.forEach((objectElement) => {
      const paramsElement: ElementParams = {
        tag: objectElement.tagName,
        classesName: [objectElement.class],
      };

      const creatorElement = new ElementCreator(paramsElement);
      creatorElement.setCallback(this.onMouseOver.bind(this), 'mouseover');
      creatorElement.setCallback(this.onMouseLeave.bind(this), 'mouseleave');

      const element = creatorElement.getElement();
      if (element instanceof HTMLElement) {
        const id = objectElement.idName;
        if (id) element.setAttribute('id', id);

        element.dataset.name = objectElement.name;
        this.allElements.push(element);
      }

      if (objectElement.inner) this.drawElements(creatorElement, objectElement?.inner);
      parent.addInnerElement(creatorElement);

      if (objectElement.answer) {
        const currentHtmlElement = creatorElement.getElement();
        currentHtmlElement?.classList.add('selection');
        if (currentHtmlElement) STATE.currentAnswer.push(currentHtmlElement);
      }
    });
  }

  private onMouseOver(event?: Event): void {
    if (event) {
      const eventTarget = event.target;
      event.stopPropagation();

      this.allElements.forEach((element) => {
        element.setAttribute('data-hover', 'false');
      });

      if (eventTarget instanceof HTMLElement) {
        eventTarget.setAttribute('data-hover', 'true');
        const tagName = eventTarget.tagName.toLowerCase();
        const className = eventTarget.classList[0];
        const hintMessage = `<${tagName} class="${className}">\n</${tagName}>`;
        if (tagName) eventTarget.setAttribute('data-after', hintMessage);
      }
    }
  }

  private onMouseLeave(event?: Event): void {
    if (event) {
      const eventTarget = event.target;
      event.stopPropagation();
      if (eventTarget instanceof HTMLElement) {
        eventTarget.setAttribute('data-hover', 'false');
      }
    }
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

  private compareElementsByDataName(a: Element, b: Element): number {
    const dataNameA = a.getAttribute('data-name');
    const dataNameB = b.getAttribute('data-name');

    if (dataNameA === null && dataNameB === null) return 0;
    if (dataNameA === null) return -1;
    if (dataNameB === null) return 1;
    if (dataNameA < dataNameB) return -1;
    if (dataNameA > dataNameB) return 1;

    return 0;
  }
}
