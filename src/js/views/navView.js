'use strict';

class NavView {
  _parentELement = document.querySelector('.header');
  // _items = this._parentELement.querySelectorAll('.nav__list .nav__item');
  _form = this._parentELement.querySelector('form');
  _toggler = this._parentELement.querySelector('#toggler');
  _expandContainer = this._parentELement.querySelector(
    '#container-expanded-nav'
  );

  constructor() {
    this._loadExpandContainer();
    this._loadEventListener();
  }

  _loadEventListener() {
    this._toggler.addEventListener('click', this._slideNav.bind(this));
  }

  collapseNav() {
    this._form.classList.add('hide-element');
    this._toggler.classList.remove('hide-element');
  }

  showNav() {
    this._form.classList.remove('hide-element');
    this._toggler.classList.add('hide-element');
    this._expandContainer.classList.add('hide-element');
  }
  _loadExpandContainer() {
    this._expandContainer.querySelector('ul').innerHTML = '';
    this._form.querySelector('.search__field').style.width = '50vw';
    this._expandContainer
      .querySelector('ul')
      .insertAdjacentHTML('afterbegin', this._form.outerHTML);
    this._form.querySelector('.search__field').style.width = 'auto';
  }

  _slideNav() {
    this._expandContainer.classList.toggle('hide-element');
  }
}

export default new NavView();
