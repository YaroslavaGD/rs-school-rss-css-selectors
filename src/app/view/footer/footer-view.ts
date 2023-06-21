import { ElementParams } from '../../../types';
import ElementCreator from '../../util/element-creator';
import './footer.scss';

const CssClasses = {
  FOOTER: 'footer',
};

const TEXT = 'footer text';

export default class FooterView {
  private elementCreator: ElementCreator;

  constructor() {
    this.elementCreator = this.createView();
  }

  public getHTMLElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  private createView(): ElementCreator {
    const params: ElementParams = {
      tag: 'footer',
      classesName: [CssClasses.FOOTER],
      textContent: TEXT,
      callback: () => {},
    };

    const element = new ElementCreator(params);

    return element;
  }
}
