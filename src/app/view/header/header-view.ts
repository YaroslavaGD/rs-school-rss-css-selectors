import './header.scss';
import { ElementParams } from '../../../types';
import View from '../view';

const CssClasses = {
  HEADER: 'header',
};

export default class HeaderView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'header',
      classesName: [CssClasses.HEADER],
      textContent: 'header text',
      callback: () => {},
    };
    super(params);
  }
}
