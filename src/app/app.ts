import '../index.scss';
import MainView from './view/main/main-view';
import AsideView from './view/aside/aside-view';
import { EventType, eventEmitter } from './event-emitter/event-emitter';
import ModalView from './view/modal/modal-view';

export default class App {
  constructor() {
    this.createView();
  }

  public run(): void {}

  private createView(): void {
    const mainView = new MainView();
    const asideView = new AsideView();
    const modalView = new ModalView();

    const main: HTMLElement | null = mainView.getHTMLElement();
    const aside: HTMLElement | null = asideView.getHTMLElement();
    const modal: HTMLElement | null = modalView.getHTMLElement();

    eventEmitter.subscribe(EventType.CORRECT_ANSWER, mainView.onAnswerCorrect.bind(mainView));
    eventEmitter.subscribe(EventType.RESET, mainView.onReset.bind(mainView));
    eventEmitter.subscribe(EventType.WIN, modalView.onWin.bind(modalView));

    if (main instanceof Node) {
      document.body.append(main);
    }

    if (aside instanceof Node) {
      document.body.append(aside);
    }

    if (modal instanceof Node) {
      document.body.append(modal);
    }
  }
}
