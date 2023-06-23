import './menu-button.scss';
import { ElementParams } from '../../../../types';
import View from '../../view';
import ElementCreator from '../../../util/element-creator';

const CssClasses = {
  MENU_BUTTON: 'menu-button',
  MENU_BUTTON_LINES: 'menu-button__lines',
};

export default class MenuButtonView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'button',
      classesName: [CssClasses.MENU_BUTTON],
      textContent: '',
      callback: () => {},
    };

    super(params);
    this.configureView();
  }

  private configureView(): void {
    const paramsLines: ElementParams = {
      tag: 'span',
      classesName: [CssClasses.MENU_BUTTON_LINES],
      textContent: '',
      callback: () => {},
    };

    const creatorLines = new ElementCreator(paramsLines);
    this.elementCreator.addInnerElement(creatorLines);
  }
}
