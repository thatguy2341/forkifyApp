'use strict';

import View from './view';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _currentPage = 1;

  addHandlerRender(handlerFunc) {
    this._parentElement.addEventListener('click', function (e) {
      const button = e.target.closest('.btn--inline');
      if (
        button &&
        (button.classList.contains('pagination__btn--next') ||
          button.classList.contains('pagination__btn--prev'))
      ) {
        handlerFunc(+button.dataset.goto);
      }
    });
  }

  _renderHTML() {
    this._currentPage = this._data.page;
    const maxPage = this._data.maxPage;

    if (this._currentPage === 1) {
      if (this._currentPage < maxPage) {
        // Page 1, and there are more.
        return this._generateNextBtn();
      } else {
        // Page 1, and there are no more.
        return '';
      }
    } else {
      if (this._currentPage < maxPage) {
        // Page >1, and there are more.
        return `
        ${this._generatePrevBtn()}
        ${this._generateNextBtn()}
        `;
      } else {
        // Page >1, and there is no more.
        return this._generatePrevBtn();
      }
    }
  }
  _generatePrevBtn() {
    return `
    <button data-goto="${
      this._currentPage - 1
    }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}.svg#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._currentPage - 1}</span>
    </button>`;
  }
  _generateNextBtn() {
    return `
    <button data-goto="${
      this._currentPage + 1
    }" class="btn--inline pagination__btn--next">
        <span>Page ${this._currentPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}.svg#icon-arrow-right"></use>
        </svg>
    </button>`;
  }
  _generatePageButtons() {}
}

export default new PaginationView();
