import './main.scss';
import { ElementParams } from '../../../types';
import View from '../view';

import HeaderView from '../header/header-view';
import FooterView from '../footer/footer-view';
import RoomView from './room/room-view';
import EditorView from './editor/editor-view';
import { EventType, eventEmitter } from '../../event-emitter/event-emitter';
import { STATE } from '../../data/data';

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

  public onAnswerCorrect(): void {
    STATE.levelsState[STATE.currentLevel] = 'done';
    const notDoneIndex = STATE.levelsState.indexOf('not-done');
    if (notDoneIndex !== -1 && notDoneIndex !== STATE.currentLevel) {
      if (STATE.currentLevel < 9) {
        STATE.currentLevel += 1;
      } else {
        STATE.currentLevel = notDoneIndex;
      }
      eventEmitter.emit(EventType.CHANGE_LEVEL);
    } else {
      eventEmitter.emit(EventType.WIN);
    }
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

    eventEmitter.subscribe(EventType.CHANGE_LEVEL, roomView.onLevelChange.bind(roomView));
    eventEmitter.subscribe(EventType.USER_INPUT, roomView.onUserInput.bind(roomView));
    eventEmitter.subscribe(EventType.CORRECT_ANSWER, roomView.onAnswerCorrect.bind(roomView));
  }
}
