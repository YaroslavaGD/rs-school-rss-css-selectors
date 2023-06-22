import '../index.scss';
import MainView from './view/main/main-view';
import AsideView from './view/aside/aside-view';

export default class App {
  constructor() {
    this.createView();
  }

  public run(): void {}

  private createView(): void {
    const mainView: HTMLElement | null = new MainView().getHTMLElement();
    const asideView: HTMLElement | null = new AsideView().getHTMLElement();

    if (mainView instanceof Node) {
      document.body.append(mainView);
    }

    if (asideView instanceof Node) {
      document.body.append(asideView);
    }
  }
}
