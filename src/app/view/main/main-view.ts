import './main.scss';
import { ElementParams } from '../../../types';
import View from '../view';

import HeaderView from '../header/header-view';
import FooterView from '../footer/footer-view';
import RoomView from './room/room-view';
import EditorView from './editor/editor-view';

const CssClasses = {
  MAIN: 'main',
};

export default class MainView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'main',
      classesName: [CssClasses.MAIN],
      textContent: '',
      callback: () => {},
    };

    super(params);
    this.configureView();
  }

  private configureView(): void {
    const headerView: HTMLElement | null = new HeaderView().getHTMLElement();
    const roomView: HTMLElement | null = new RoomView().getHTMLElement();
    const editorView: HTMLElement | null = new EditorView().getHTMLElement();
    const footerView: HTMLElement | null = new FooterView().getHTMLElement();

    if (headerView instanceof Node) {
      this.elementCreator.addInnerElement(headerView);
    }
    if (roomView instanceof Node) {
      this.elementCreator.addInnerElement(roomView);
    }
    if (editorView instanceof Node) {
      this.elementCreator.addInnerElement(editorView);
    }
    if (footerView instanceof Node) {
      this.elementCreator.addInnerElement(footerView);
    }
  }
}
