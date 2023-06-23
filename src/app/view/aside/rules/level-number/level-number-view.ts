import './level-number.scss';
import View from '../../../view';
import { ElementParams } from '../../../../../types';
import ElementCreator from '../../../../util/element-creator';

const CssClasses = {
  LEVEL_NUMBER: 'level-number',
  LEVEL_NUMBER_TEXT: 'level-number__text',
  LEVEL_NUMBER_MARK: 'level-number__mark',
};

const LEVEL_TEXT = 'Level 1 of 32';

export default class LevelNumberView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'h2',
      classesName: [CssClasses.LEVEL_NUMBER],
      textContent: '',
      callback: () => {},
    };
    super(params);
    this.configureView();
  }

  private configureView(): void {
    const paramsText: ElementParams = {
      tag: 'span',
      classesName: [CssClasses.LEVEL_NUMBER_TEXT],
      textContent: LEVEL_TEXT,
      callback: () => {},
    };

    const creatorText = new ElementCreator(paramsText);
    this.elementCreator.addInnerElement(creatorText);

    const paramsMark: ElementParams = {
      tag: 'span',
      classesName: [CssClasses.LEVEL_NUMBER_MARK],
      textContent: '',
      callback: () => {},
    };

    const creatorMark = new ElementCreator(paramsMark);
    this.elementCreator.addInnerElement(creatorMark);
  }
}
