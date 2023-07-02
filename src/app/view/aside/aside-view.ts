import './aside.scss';
import { ElementParams } from '../../../types';
import View from '../view';
import RulesView from './rules/rules-view';
import MenuButtonView from './menu-button/menu-button-view';
import LevelsNavView from './levels-nav/levels-nav-view';
import { EventType, eventEmitter } from '../../event-emitter/event-emitter';

const CssClasses = {
  ASIDE: 'aside',
  OPEN: 'open',
};

export default class AsideView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'aside',
      classesName: [CssClasses.ASIDE, CssClasses.OPEN],
    };

    super(params);
    this.configureView();
  }

  private configureView(): void {
    const rulesView: HTMLElement | null = new RulesView().getHTMLElement();
    const levelsNav = new LevelsNavView();
    const levelsNavView: HTMLElement | null = levelsNav.getHTMLElement();
    const menuButtonView: HTMLElement | null = new MenuButtonView().getHTMLElement();

    eventEmitter.subscribe(EventType.CHANGE_LEVEL, levelsNav.onLevelChange.bind(levelsNav));
    eventEmitter.subscribe(EventType.CORRECT_ANSWER, levelsNav.onCorrectAnswer.bind(levelsNav));

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
