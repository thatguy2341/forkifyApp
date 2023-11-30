'use strict';

import View from './view';
import previewView from './previewView.js';
// import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks choosen yet. Go ahead and choose some';
  _succesMessage;

  addHandlerRender(handlerFunc) {
    window.addEventListener('load', () => handlerFunc(false));
  }

  _renderHTML() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
