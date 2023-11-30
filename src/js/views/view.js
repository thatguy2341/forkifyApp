'use strict';

import icons from 'url:../../img/icons.svg';

/**
 * parent view class, with basic functionality.
 * @author Guy Newman
 */
export default class View {
  _data;

  /**
   * Render the parent element object to the DOM
   * @param {Object | Object[]} data data to render with
   * @param {boolean} [render=true] If false, doesnt render and only returns the inner html.
   * @returns {undefined | string} returns error message if data given is not formatted correctly.
   * @this {Object} view instance.
   */
  render(data, render = true) {
    if (
      (data.constructor === Object && Object.values(data).length === 0) ||
      (Array.isArray(data) && data.length === 0)
    )
      return this.renderErrorMessage();

    this._data = data;
    if (!render) return this._renderHTML();

    this._parentElement.innerHTML = this._renderHTML();
  }

  /**
   * renders only the changes made to the parent Object to the DOM.
   * @param {any} data data that will change the parent Object.
   * @this {Object} view instance
   */
  update(data) {
    this._data = data;
    const newDomElement = document
      .createRange()
      .createContextualFragment(this._renderHTML());
    const newElements = Array.from(newDomElement.querySelectorAll('*'));
    const currentElements = Array.from(
      this._parentElement.querySelectorAll('*')
    );

    newElements.forEach((element, i) => {
      const otherElement = currentElements[i];
      if (!element.isEqualNode(otherElement))
        otherElement.innerHTML = element.innerHTML;
    });
  }

  /**
   * Shows an error message in the parentElement object.
   * @param {string} [message=this._errorMessage] error message.
   * @this {Object} view instance
   */
  renderErrorMessage(message = this._errorMessage) {
    this._parentElement.innerHTML = `
    <div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
  }

  /**
   * Shows a success message in the parentElement object.
   * @param {string} [message=this._succesMessage] error message.
   * @this {Object} view instance
   */
  renderMessage(message = this._succesMessage) {
    this._parentElement.innerHTML = `
    <div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
  }
  /**
   * render a spinner
   * @this {Object} view instance
   */
  renderSpinner() {
    this._parentElement.innerHTML = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
  }

  /**
   * clears the html inside the parent element.
   * @this {Object} view instance
   */
  clear() {
    this._parentElement.innerHTML = '';
  }
}
