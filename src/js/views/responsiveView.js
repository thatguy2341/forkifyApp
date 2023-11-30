'use strict';

class ResponsiveView {
  _parentElemnent = document.querySelector('.container');
  _firstElement = document.querySelector('.recipe');
  _secondElement = document.querySelector('.search-results');
  focusedElement = 'recipe';

  addHandlerRender(handlerFunc) {
    ['resize', 'load'].forEach(event =>
      window.addEventListener(event, handlerFunc)
    );
  }

  organizeBigGrid() {
    this._parentElemnent.style.gridTemplate = `
    "head head" 10rem
    "list recipe" minmax(100rem, auto) / 1fr 2fr`;
    this.showAll();
  }

  organizeTinyGrid() {
    this._parentElemnent.style.gridTemplate = `
    "head" 10rem
    "${this.focusedElement}" 10rem`;

    this.focusFirst();
  }

  focusFirst() {
    this._firstElement.classList.remove('hide-element');
    this._secondElement.classList.add('hide-element');
  }
  focusSecond() {
    this._firstElement.classList.add('hide-element');
    this._secondElement.classList.remove('hide-element');
  }

  showAll() {
    this._firstElement.classList.remove('hide-element');
    this._secondElement.classList.remove('hide-element');
  }
}

export default new ResponsiveView();
