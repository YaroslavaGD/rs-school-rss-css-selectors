import '../index.scss';
import MainView from './view/main/main-view';
import AsideView from './view/aside/aside-view';
import { EventType, eventEmitter } from './event-emitter/event-emitter';
import ModalView from './view/modal/modal-view';
import { STATE } from './data/data';

export default class App {
  constructor() {
    window.addEventListener('beforeunload', this.setLocalStorage.bind(this));
    this.getLocalStorage();
  }

  private setLocalStorage(): void {
    localStorage.setItem('currentLevel', STATE.currentLevel.toString());
    localStorage.setItem('levelsState', STATE.levelsState.toString());
  }

  private getLocalStorage(): void {
    const currentLevel = localStorage.getItem('currentLevel');
    if (currentLevel) {
      STATE.currentLevel = Number(currentLevel);
    }

    const levelsState = localStorage.getItem('levelsState');
    if (levelsState) {
      const objectState = levelsState.split(',');

      STATE.levelsState = objectState;
    }
  }

  public run(): void {
    this.createView();
  }

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
