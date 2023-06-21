import { Callback, ClassesArr, ElementParams } from '../../types';

export default class ElementCreator {
  private element: HTMLElement | null;

  constructor(params: ElementParams) {
    this.element = null;
    this.createElement(params);
    this.setCssClass(params.classesName);
    this.setTextContent(params.textContent);
    this.setCallback(params.callback);
  }

  public getElement(): HTMLElement | null {
    return this.element;
  }

  private createElement(params: ElementParams): void {
    this.element = document.createElement(params.tag);
  }

  private setCssClass(cssClasses: ClassesArr): void {
    if (this.element) {
      cssClasses.forEach((className) => this.element?.classList.add(className));
    }
  }

  private setTextContent(textContent: string): void {
    if (this.element) this.element.textContent = textContent;
  }

  private setCallback(callback: Callback): void {
    if (this.element) {
      this.element.addEventListener('click', (event: Event) => callback(event));
    }
  }
}
