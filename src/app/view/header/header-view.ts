import './header.scss';
import { ElementParams } from '../../../types';
import View from '../view';
import ElementCreator from '../../util/element-creator';

const CssClasses = {
  HEADER: 'header',
  LOGO: 'logo',
  LOGO_A: 'logo__a',
  LOGO_IMG: 'logo__img',
  HEADER_RULE: 'header__rule',
};

const LOGO_TEXT = 'RS-CSS-Selectors';
const RULE_TEXT = 'Select the plates';

export default class HeaderView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'header',
      classesName: [CssClasses.HEADER],
      textContent: '',
      callback: () => {},
    };
    super(params);
    this.configureView();
  }

  private configureView(): void {
    this.setLogo();
    this.setRules();
  }

  private setLogo(): void {
    const paramsLogo: ElementParams = {
      tag: 'h1',
      classesName: [CssClasses.LOGO],
      textContent: '',
      callback: () => {},
    };
    const creatorLogo = new ElementCreator(paramsLogo);

    const paramsLink: ElementParams = {
      tag: 'a',
      classesName: [CssClasses.LOGO_A],
      textContent: LOGO_TEXT,
      callback: () => {},
    };
    const creatorLink = new ElementCreator(paramsLink);

    const paramsImg: ElementParams = {
      tag: 'img',
      classesName: [CssClasses.LOGO_IMG],
      textContent: '',
      callback: () => {},
    };
    const creatorImg = new ElementCreator(paramsImg);

    creatorLink.addInnerElement(creatorImg);
    creatorLogo.addInnerElement(creatorLink);

    this.elementCreator.addInnerElement(creatorLogo);
  }

  private setRules(): void {
    const paramsRules: ElementParams = {
      tag: 'h2',
      classesName: [CssClasses.HEADER_RULE],
      textContent: RULE_TEXT,
      callback: () => {},
    };

    const creatorRules = new ElementCreator(paramsRules);
    this.elementCreator.addInnerElement(creatorRules);
  }
}
