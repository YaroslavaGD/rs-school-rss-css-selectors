import '../index.scss';
import HeaderView from './view/header/header-view';
import FooterView from './view/footer/footer-view';

export default class App {
  constructor() {
    this.createView();
  }

  public run(): void {}

  private createView(): void {
    const headerView: HeaderView = new HeaderView();
    const footerView: FooterView = new FooterView();

    document.body.append(headerView.getHTMLElement() as Node);
    document.body.append(footerView.getHTMLElement() as Node);
  }
}
