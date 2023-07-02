import '../index.scss';
import MainView from './view/main/main-view';
import AsideView from './view/aside/aside-view';
import { EventType, eventEmitter } from './event-emitter/event-emitter';

export default class App {
  constructor() {
    this.createView();
  }

  public run(): void {}

  private createView(): void {
    const mainView = new MainView();
    const asideView = new AsideView();

    const main: HTMLElement | null = mainView.getHTMLElement();
    const aside: HTMLElement | null = asideView.getHTMLElement();

    eventEmitter.subscribe(EventType.CORRECT_ANSWER, mainView.onAnswerCorrect.bind(mainView));

    if (main instanceof Node) {
      document.body.append(main);
    }

    if (aside instanceof Node) {
      document.body.append(aside);
    }
  }
}
