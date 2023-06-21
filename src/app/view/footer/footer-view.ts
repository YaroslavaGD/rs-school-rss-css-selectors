import './footer.scss';
import { ElementParams } from '../../../types';
import View from '../view';

const CssClasses = {
  FOOTER: 'footer',
};

const TEXT = 'footer text';

export default class FooterView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'footer',
      classesName: [CssClasses.FOOTER],
      textContent: TEXT,
      callback: () => {},
    };
    super(params);
  }
}
