import './main.scss';
import { ElementParams } from '../../../types';
import View from '../view';

import HeaderView from '../header/header-view';
import FooterView from '../footer/footer-view';
import RoomView from './room/room-view';
import EditorView from './editor/editor-view';
import { EventType, eventEmitter } from '../../event-emitter/event-emitter';

const CssClasses = {
  MAIN: 'main',
};

export default class MainView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'main',
      classesName: [CssClasses.MAIN],
    };

    super(params);
    this.configureView();
  }

  private configureView(): void {
    const header: HTMLElement | null = new HeaderView().getHTMLElement();
    const roomView = new RoomView();
    const room: HTMLElement | null = roomView.getHTMLElement();
    const editor: HTMLElement | null = new EditorView().getHTMLElement();
    const footer: HTMLElement | null = new FooterView().getHTMLElement();

    if (header instanceof Node) {
      this.elementCreator.addInnerElement(header);
    }
    if (room instanceof Node) {
      this.elementCreator.addInnerElement(room);
    }
    if (editor instanceof Node) {
      this.elementCreator.addInnerElement(editor);
    }
    if (footer instanceof Node) {
      this.elementCreator.addInnerElement(footer);
    }

    eventEmitter.subscribe(EventType.CHANGE_LEVEL, roomView.onEnterClick);
  }
}
