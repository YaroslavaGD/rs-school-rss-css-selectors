import FooterView from './view/footer/footer-view';

export default class App {
  constructor() {
    this.createView();
  }

  public run(): void {}

  private createView(): void {
    const footerView: FooterView = new FooterView();

    document.body.append(footerView.getHTMLElement() as Node);
  }
}
