import { ElementParams } from '../../../../types';
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

  LEVELS_RESET: 'levels-nav__reset',
};

const TEXT_HEADER = 'Choose a level';
const TEXT_RESET = 'Reset progress';

const LevelsTextArr = ['A', 'A', '#id', 'A B', '#id A', '.classname', 'A.classname', 'A, B'];

export default class LevelsNavView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'nav',
      classesName: [CssClasses.LEVELS_NAV_WRAPPER],
    };
    super(params);
    this.configureView();
  }

  public setHeader(): void {
    console.log('enter clicked - i know it!');
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
    const paramsReset: ElementParams = {
      tag: 'button',
      classesName: [CssClasses.LEVELS_RESET],
      textContent: TEXT_RESET,
    };
    const creatorReset = new ElementCreator(paramsReset);
    this.elementCreator.addInnerElement(creatorReset);
  }

  private setLevels(levelsTextArr: string[]): void {
    const paramsLevels: ElementParams = {
      tag: 'ol',
      classesName: [CssClasses.LEVELS_NAV],
    };
    const creatorLevels = new ElementCreator(paramsLevels);
    levelsTextArr.forEach((levelText) => {
      const paramsLevelItem: ElementParams = {
        tag: 'li',
        classesName: [CssClasses.LEVELS_NAV_ITEM],
        textContent: '',
        callback: () => {},
      };
      const creatorLevelItem = new ElementCreator(paramsLevelItem);

      const paramsLevelButton: ElementParams = {
        tag: 'button',
        classesName: [CssClasses.LEVELS_NAV_BUTTON],
      };
      const creatorLevelButton = new ElementCreator(paramsLevelButton);

      const paramsLevelName: ElementParams = {
        tag: 'span',
        classesName: [CssClasses.LEVELS_NAV_NAME],
        textContent: levelText,
      };
      const creatorLevelName = new ElementCreator(paramsLevelName);

      creatorLevelButton.addInnerElement(creatorLevelName);
      creatorLevelItem.addInnerElement(creatorLevelButton);
      creatorLevels.addInnerElement(creatorLevelItem);
    });

    this.elementCreator.addInnerElement(creatorLevels);
  }
}
