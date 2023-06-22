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

  public addInnerElement(element: HTMLElement | ElementCreator): void {
    if (element instanceof ElementCreator) {
      this.element?.append(element.getElement() as Node);
    } else {
      this.element?.append(element);
    }
  }

  public getElement(): HTMLElement | null {
    return this.element;
  }

  private createElement(params: ElementParams): void {
    this.element = document.createElement(params.tag);
  }

  private setCssClass(cssClasses: ClassesArr): void {
    if (this.element) {
      this.element.classList.add(...cssClasses);
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
