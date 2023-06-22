import './editor.scss';
import View from '../../view';
import { ElementParams } from '../../../../types';
import CodeView from './code/code-view';
import LayoutView from './layout/layout-view';
// import ElementCreator from '../../../util/element-creator';

const CssClasses = {
  EDITOR: 'editor',
};

export default class EditorView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.EDITOR],
      textContent: '',
      callback: () => {},
    };
    super(params);
    this.configureView();
  }

  private configureView(): void {
    const codeView: HTMLElement | null = new CodeView().getHTMLElement();
    if (codeView instanceof Node) {
      this.elementCreator.addInnerElement(codeView);
    }

    const layoutView: HTMLElement | null = new LayoutView().getHTMLElement();
    if (layoutView instanceof Node) {
      this.elementCreator.addInnerElement(layoutView);
    }
  }
}
