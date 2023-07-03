import './header.scss';
import { ElementParams } from '../../../types';
import View from '../view';
import ElementCreator from '../../util/element-creator';
import { EventType, eventEmitter } from '../../event-emitter/event-emitter';

const CssClasses = {
  HEADER: 'header',
  LOGO: 'logo',
  LOGO_A: 'logo__a',
  LOGO_IMG: 'logo__img',
  LOGO_HELP: 'logo__help',
  HEADER_RULE: 'header__rule',
};

const LOGO_TEXT = 'RS-CSS-Selectors';
const RULE_TEXT = 'Select animals';
const HELP_TEXT = 'Help';

export default class HeaderView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'header',
      classesName: [CssClasses.HEADER],
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
    };
    const creatorLogo = new ElementCreator(paramsLogo);

    const paramsLink: ElementParams = {
      tag: 'a',
      classesName: [CssClasses.LOGO_A],
      textContent: LOGO_TEXT,
    };
    const creatorLink = new ElementCreator(paramsLink);

    const paramsImg: ElementParams = {
      tag: 'img',
      classesName: [CssClasses.LOGO_IMG],
    };
    const creatorImg = new ElementCreator(paramsImg);
    creatorLink.addInnerElement(creatorImg);
    creatorLogo.addInnerElement(creatorLink);

    const creatorHelp = this.setHelp();
    creatorLogo.addInnerElement(creatorHelp);

    this.elementCreator.addInnerElement(creatorLogo);
  }

  private setHelp(): ElementCreator {
    const paramsHelp: ElementParams = {
      tag: 'button',
      classesName: [CssClasses.LOGO_HELP],
      textContent: HELP_TEXT,
      callback: () => {
        console.log('help click');
        eventEmitter.emit(EventType.HELP_ANSWER);
      },
    };
    const creatorHelp = new ElementCreator(paramsHelp);

    return creatorHelp;
  }

  private setRules(): void {
    const paramsRules: ElementParams = {
      tag: 'h2',
      classesName: [CssClasses.HEADER_RULE],
      textContent: RULE_TEXT,
    };

    const creatorRules = new ElementCreator(paramsRules);
    this.elementCreator.addInnerElement(creatorRules);
  }
}
