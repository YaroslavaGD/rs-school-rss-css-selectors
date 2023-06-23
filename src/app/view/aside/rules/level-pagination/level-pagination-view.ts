import './level-pagination.scss';
import View from '../../../view';
import { ElementParams } from '../../../../../types';
import ElementCreator from '../../../../util/element-creator';

const CssClasses = {
  LEVEL_PAGINATION: 'level-pagination',
  LEVEL_PAGINATION_PREV: 'level-pagination__prev',
  LEVEL_PAGINATION_NEXT: 'level-pagination__next',
};

export default class LevelPaginationView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.LEVEL_PAGINATION],
      textContent: '',
      callback: () => {},
    };
    super(params);
    this.configureView();
  }

  private configureView(): void {
    const paramsPrev: ElementParams = {
      tag: 'button',
      classesName: [CssClasses.LEVEL_PAGINATION_PREV],
      textContent: '',
      callback: () => {},
    };

    const creatorPrev = new ElementCreator(paramsPrev);
    this.elementCreator.addInnerElement(creatorPrev);

    const paramsNext: ElementParams = {
      tag: 'button',
      classesName: [CssClasses.LEVEL_PAGINATION_NEXT],
      textContent: '',
      callback: () => {},
    };

    const creatorNext = new ElementCreator(paramsNext);
    this.elementCreator.addInnerElement(creatorNext);
  }
}
