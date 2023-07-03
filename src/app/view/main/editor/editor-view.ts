import './editor.scss';
import View from '../../view';
import { ElementParams } from '../../../../types';
import CodeView from './code/code-view';
import LayoutView from './layout/layout-view';
import { EventType, eventEmitter } from '../../../event-emitter/event-emitter';
// import ElementCreator from '../../../util/element-creator';

const CssClasses = {
  EDITOR: 'editor',
};

export default class EditorView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.EDITOR],
    };
    super(params);
    this.configureView();
  }

  private configureView(): void {
    const codeView = new CodeView();
    const code: HTMLElement | null = codeView.getHTMLElement();
    if (code instanceof Node) {
      this.elementCreator.addInnerElement(code);
    }
    const layoutView = new LayoutView();
    const layout: HTMLElement | null = layoutView.getHTMLElement();
    if (layout instanceof Node) {
      this.elementCreator.addInnerElement(layout);
    }

    eventEmitter.subscribe(EventType.CHANGE_LEVEL, codeView.onLevelChange.bind(codeView));
    eventEmitter.subscribe(EventType.HELP_ANSWER, codeView.onHelp.bind(codeView));
    eventEmitter.subscribe(EventType.CHANGE_LEVEL, layoutView.onLevelChange.bind(layoutView));
  }
}
