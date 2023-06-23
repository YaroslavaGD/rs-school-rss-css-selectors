import './aside.scss';
import { ElementParams } from '../../../types';
import View from '../view';
import RulesView from './rules/rules-view';

const CssClasses = {
  ASIDE: 'aside',
};

export default class AsideView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'aside',
      classesName: [CssClasses.ASIDE],
      textContent: '',
      callback: () => {},
    };

    super(params);
    this.configureView();
  }

  private configureView(): void {
    const rulesView: HTMLElement | null = new RulesView().getHTMLElement();
    if (rulesView instanceof Node) {
      this.elementCreator.addInnerElement(rulesView);
    }
  }
}
