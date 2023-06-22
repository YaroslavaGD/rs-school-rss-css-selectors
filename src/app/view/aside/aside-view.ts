import './aside.scss';
import { ElementParams } from '../../../types';
import View from '../view';

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
  }

  private configureView(): void {}
}
