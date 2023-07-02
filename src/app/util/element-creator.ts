import { Callback, ClassesArr, ElementParams } from '../../types';

export default class ElementCreator {
  private element: HTMLElement | null;

  constructor(params: ElementParams) {
    this.element = null;
    this.createElement(params);
    this.setCssClass(params.classesName);
    if (params.textContent) this.setTextContent(params.textContent);
    if (params.callback) this.setCallback(params.callback);
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

  public setCssClass(cssClasses: ClassesArr): void {
    if (this.element) {
      this.element.classList.add(...cssClasses);
    }
  }

  public setTextContent(textContent: string): void {
    if (this.element) {
      this.element.innerText = textContent;
    }
  }

  public clearInnerHtml(): void {
    if (this.element) this.element.innerHTML = '';
  }

  public setInnerHtml(innerContent: string): void {
    if (this.element) this.element.innerHTML = innerContent;
  }

  private createElement(params: ElementParams): void {
    this.element = document.createElement(params.tag);
  }

  public setCallback(callback: Callback): void {
    if (this.element) {
      this.element.addEventListener('click', (event: Event) => callback(event));
    }
  }

  public setOnKeypress(callback: Callback): void {
    if (this.element) {
      this.element.addEventListener('keypress', (event: Event) => callback(event));
    }
  }
}
