import './rules.scss';
import View from '../../view';
import { ElementParams } from '../../../../types';
import ElementCreator from '../../../util/element-creator';
import LevelNumberView from './level-number/level-number-view';
import LevelPaginationView from './level-pagination/level-pagination-view';

const CssClasses = {
  RULES: 'rules',
  RULES_HEADER: 'rules__header',
  RULES_MAIN: 'rules__main',
};

export default class RulesView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.RULES],
      textContent: '',
      callback: () => {},
    };
    super(params);
    this.configureView();
  }

  private configureView(): void {
    const paramsHeader: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.RULES_HEADER],
      textContent: '',
      callback: () => {},
    };

    const creatorHeader = new ElementCreator(paramsHeader);
    const levelNumberView: HTMLElement | null = new LevelNumberView().getHTMLElement();
    const levelPaginationView: HTMLElement | null = new LevelPaginationView().getHTMLElement();

    if (levelNumberView instanceof Node) {
      creatorHeader.addInnerElement(levelNumberView);
    }

    if (levelPaginationView instanceof Node) {
      creatorHeader.addInnerElement(levelPaginationView);
    }

    this.elementCreator.addInnerElement(creatorHeader);
  }
}
