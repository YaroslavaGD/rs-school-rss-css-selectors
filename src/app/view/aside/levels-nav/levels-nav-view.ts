import { ElementParams } from '../../../../types';
import { STATE } from '../../../data/data';
import { EventType, eventEmitter } from '../../../event-emitter/event-emitter';
import ElementCreator from '../../../util/element-creator';
import View from '../../view';
import './levels-nav.scss';

const CssClasses = {
  LEVELS_NAV_WRAPPER: 'levels-nav-wrapper',
  LEVELS_NAV_WRAPPER_HEADER: 'levels-nav-wrapper__header',

  LEVELS_NAV: 'levels-nav',
  LEVELS_NAV_ITEM: 'levels-nav__item',
  LEVELS_NAV_BUTTON: 'levels-nav__button',
  LEVELS_NAV_NAME: 'levels-nav__name',
  LEVELS_NAV_ITEM_ACTIVE: 'active',
  LEVELS_NAV_ITEM_DONE: 'done',
  LEVELS_NAV_ITEM_NOT_DONE: 'not-done',
  LEVELS_NAV_ITEM_HELP: 'help',

  LEVELS_RESET: 'levels-nav__reset',
};

const TEXT_HEADER = 'Choose a level';
const TEXT_RESET = 'Reset progress';

const LevelsTextArr = [
  'tagName',
  '*',
  '.className',
  'tagName.className',
  '#id',
  'tagName tagName',
  'tagName, tagName',
  'tagName + tagName',
  'tagName > tagName',
  'tagName ~ tagName',
];

export default class LevelsNavView extends View {
  private liElements: HTMLElement[] = [];

  constructor() {
    const params: ElementParams = {
      tag: 'nav',
      classesName: [CssClasses.LEVELS_NAV_WRAPPER],
    };
    super(params);
    this.configureView();
  }

  public setHeader(): void {
    //    console.log('enter clicked - i know it!');
  }

  public onLevelChange(): void {
    this.liElements.forEach((element, i) => {
      element.classList.remove(CssClasses.LEVELS_NAV_ITEM_ACTIVE);
      if (i === STATE.currentLevel) {
        element.classList.add(CssClasses.LEVELS_NAV_ITEM_ACTIVE);
      }
    });
  }

  public onCorrectAnswer(lastLevel?: string): void {
    if (lastLevel) {
      const index = Number(lastLevel);

      this.liElements[index].classList.remove(CssClasses.LEVELS_NAV_ITEM_NOT_DONE);
      this.liElements[index].classList.remove(CssClasses.LEVELS_NAV_ITEM_DONE);
      this.liElements[index].classList.add(CssClasses.LEVELS_NAV_ITEM_DONE);
    }
  }

  public onHelp(): void {
    this.liElements[STATE.currentLevel].classList.add(CssClasses.LEVELS_NAV_ITEM_HELP);
  }

  private configureView(): void {
    const paramsHeader: ElementParams = {
      tag: 'h2',
      classesName: [CssClasses.LEVELS_NAV_WRAPPER_HEADER],
      textContent: TEXT_HEADER,
    };
    const creatorHeader = new ElementCreator(paramsHeader);
    this.elementCreator.addInnerElement(creatorHeader);
    this.setLevels(LevelsTextArr);

    const creatorReset = this.createReset();
    this.elementCreator.addInnerElement(creatorReset);
  }

  private createReset(): ElementCreator {
    const paramsReset: ElementParams = {
      tag: 'button',
      classesName: [CssClasses.LEVELS_RESET],
      textContent: TEXT_RESET,
      callback: () => {
        this.liElements.forEach((element) => {
          element.classList.remove(CssClasses.LEVELS_NAV_ITEM_DONE);
          element.classList.remove(CssClasses.LEVELS_NAV_ITEM_HELP);
        });
        eventEmitter.emit(EventType.RESET);
      },
    };
    const creatorReset = new ElementCreator(paramsReset);
    return creatorReset;
  }

  private setLevels(levelsTextArr: string[]): void {
    const creatorLevels = this.createOl();

    levelsTextArr.forEach((levelText, i) => {
      const creatorLevelItem = this.createLi();
      const liElement = creatorLevelItem.getElement();
      if (liElement instanceof HTMLElement) {
        liElement.classList.add(STATE.levelsState[i]);
        if (i === STATE.currentLevel) {
          liElement.classList.add(CssClasses.LEVELS_NAV_ITEM_ACTIVE);
        }
        this.liElements.push(liElement);
      }

      const creatorLevelButton = this.createButton();
      const creatorLevelName = this.createSpan(levelText);

      creatorLevelButton.addInnerElement(creatorLevelName);
      creatorLevelItem.addInnerElement(creatorLevelButton);
      creatorLevels.addInnerElement(creatorLevelItem);
    });

    this.elementCreator.addInnerElement(creatorLevels);
  }

  private createOl(): ElementCreator {
    const paramsLevels: ElementParams = {
      tag: 'ol',
      classesName: [CssClasses.LEVELS_NAV],
    };

    const creatorLevels = new ElementCreator(paramsLevels);
    return creatorLevels;
  }

  private createLi(): ElementCreator {
    const paramsLevelItem: ElementParams = {
      tag: 'li',
      classesName: [CssClasses.LEVELS_NAV_ITEM],
      textContent: '',
      callback: (event) => {
        if (event) {
          const clickedElement = event.target as HTMLElement;
          const clickedLi = clickedElement.closest('li');
          if (clickedLi) this.handleLiClick(clickedLi);
        }
      },
    };
    const creatorLevelItem = new ElementCreator(paramsLevelItem);
    return creatorLevelItem;
  }

  private handleLiClick(clickedLi: HTMLElement): void {
    const liIndex = this.liElements.indexOf(clickedLi);
    STATE.currentLevel = liIndex;
    eventEmitter.emit(EventType.CHANGE_LEVEL);
  }

  private createButton(): ElementCreator {
    const paramsLevelButton: ElementParams = {
      tag: 'button',
      classesName: [CssClasses.LEVELS_NAV_BUTTON],
    };
    const creatorLevelButton = new ElementCreator(paramsLevelButton);

    return creatorLevelButton;
  }

  private createSpan(levelText: string): ElementCreator {
    const paramsLevelName: ElementParams = {
      tag: 'span',
      classesName: [CssClasses.LEVELS_NAV_NAME],
      textContent: levelText,
    };
    const creatorLevelName = new ElementCreator(paramsLevelName);

    return creatorLevelName;
  }
}
