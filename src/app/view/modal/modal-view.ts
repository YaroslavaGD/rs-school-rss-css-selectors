import './modal.scss';
import { ElementParams } from '../../../types';
import View from '../view';
import ElementCreator from '../../util/element-creator';
import imageWin from '../../../img/win.svg';

const CssClasses = {
  MODAL: 'app-modal',
  MODAL_OPEN: 'app-modal--open',
  MODAL_WIN: 'app-modal--win',
  MODAL_WINDOW: 'app-modal__window',
  MODAL_HEADER: 'app-modal__header',
  MODAL_CONTENT: 'app-modal__content',
  MODAL_BUTTON: 'app-modal__button',
  MODAL_TEXT: 'app-modal__text',
  MODAL_IMG: 'app-modal__img',
  MODAL_IMG_WIN: 'app-modal__img--win',
};

const MODAL_TEXT = 'You win!';

export default class ModalView extends View {
  constructor() {
    const params: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.MODAL, CssClasses.MODAL_WIN],
      callback: (e) => {
        if (e?.target === this.getHTMLElement()) {
          this.onCloseModal();
        }
      },
    };
    super(params);
    this.configureView();
  }

  public onWin(): void {
    this.elementCreator.setCssClass([CssClasses.MODAL_OPEN]);
  }

  public onCloseModal(): void {
    this.elementCreator.removeCssClass(CssClasses.MODAL_OPEN);
  }

  private configureView(): void {
    const windowParams: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.MODAL_WINDOW],
    };
    const windowCreator = new ElementCreator(windowParams);

    const headerCreator = this.setHeader();
    windowCreator.addInnerElement(headerCreator);

    const contentCreator = this.setContent();
    windowCreator.addInnerElement(contentCreator);

    const buttonCreator = this.setButton();
    windowCreator.addInnerElement(buttonCreator);

    this.elementCreator.addInnerElement(windowCreator);
  }

  private setHeader(): ElementCreator {
    const headerParams: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.MODAL_HEADER],
    };
    const headerCreator = new ElementCreator(headerParams);

    const modalImgWin = new Image();
    modalImgWin.src = imageWin;
    modalImgWin.classList.add(CssClasses.MODAL_IMG);
    modalImgWin.classList.add(CssClasses.MODAL_IMG_WIN);
    modalImgWin.alt = 'Сat rejoices in victory';

    headerCreator.addInnerElement(modalImgWin);

    return headerCreator;
  }

  private setContent(): ElementCreator {
    const contentParams: ElementParams = {
      tag: 'div',
      classesName: [CssClasses.MODAL_CONTENT],
    };
    const contentCreator = new ElementCreator(contentParams);

    const textParams: ElementParams = {
      tag: 'p',
      classesName: [CssClasses.MODAL_TEXT],
      textContent: MODAL_TEXT,
    };
    const textCreator = new ElementCreator(textParams);
    contentCreator.addInnerElement(textCreator);

    return contentCreator;
  }

  private setButton(): ElementCreator {
    const buttonParams: ElementParams = {
      tag: 'button',
      classesName: [CssClasses.MODAL_BUTTON],
      callback: () => {
        this.elementCreator.removeCssClass(CssClasses.MODAL_OPEN);
      },
    };
    const buttonCreator = new ElementCreator(buttonParams);
    return buttonCreator;
  }
}
