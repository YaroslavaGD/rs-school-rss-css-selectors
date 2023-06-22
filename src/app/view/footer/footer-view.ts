import './footer.scss';
import { ElementParams, LinkParams } from '../../../types';
import View from '../view';
import ElementCreator from '../../util/element-creator';

const CssClasses = {
  FOOTER: 'footer',
  FOOTER_ITEM: 'footer__item',
  FOOTER_LINK: 'footer__item--link',
};

const YEAR_TEXT = '2023';

const Links: LinkParams[] = [
  {
    name: 'Github',
    url: '#',
  },
  {
    name: 'Design',
    url: '#',
  },
  {
    name: 'RS-Shool',
    url: '#',
  },
];

export default class FooterView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'footer',
      classesName: [CssClasses.FOOTER],
      textContent: '',
      callback: () => {},
    };
    super(params);
    this.configureView();
  }

  private configureView(): void {
    this.setYear();
    this.setLinks();
  }

  private setYear(): void {
    const paramsYear: ElementParams = {
      tag: 'span',
      classesName: [CssClasses.FOOTER_ITEM],
      textContent: YEAR_TEXT,
      callback: () => {},
    };
    const yearCreator = new ElementCreator(paramsYear);
    this.elementCreator.addInnerElement(yearCreator);
  }

  private setLinks(): void {
    Links.forEach((item) => {
      const paramsLink: ElementParams = {
        tag: 'a',
        classesName: [CssClasses.FOOTER_ITEM, CssClasses.FOOTER_LINK],
        textContent: item.name,
        callback: () => {},
      };
      const linkCreator = new ElementCreator(paramsLink);
      linkCreator.getElement()?.setAttribute('href', item.url);
      this.elementCreator.addInnerElement(linkCreator);
    });
  }
}
