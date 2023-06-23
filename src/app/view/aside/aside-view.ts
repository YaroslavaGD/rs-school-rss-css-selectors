import './aside.scss';
import { ElementParams } from '../../../types';
import View from '../view';
import RulesView from './rules/rules-view';
import MenuButtonView from './menu-button/menu-button-view';
import LevelsNavView from './levels-nav/levels-nav-view';

const CssClasses = {
  ASIDE: 'aside',
  OPEN: 'open',
};

export default class AsideView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'aside',
      classesName: [CssClasses.ASIDE, CssClasses.OPEN],
      textContent: '',
      callback: () => {},
    };

    super(params);
    this.configureView();
  }

  private configureView(): void {
    const rulesView: HTMLElement | null = new RulesView().getHTMLElement();
    const levelsNavView: HTMLElement | null = new LevelsNavView().getHTMLElement();
    const menuButtonView: HTMLElement | null = new MenuButtonView().getHTMLElement();

    if (rulesView instanceof Node) {
      this.elementCreator.addInnerElement(rulesView);
    }

    if (levelsNavView instanceof Node) {
      this.elementCreator.addInnerElement(levelsNavView);
    }

    if (menuButtonView instanceof Node) {
      this.elementCreator.addInnerElement(menuButtonView);
    }
  }
}
