'use strict';

class SearchView {
  _parentElement;
  _searchBars;

  getQuery() {
    const query = this._searchBars
      .map(searchBar => searchBar.value || '')
      .join('');
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._searchBars.forEach(searchbar => (searchbar.value = ''));
  }

  _getSearchBars() {
    this._parentElement = Array.from(document.querySelectorAll('.search'));
    this._searchBars = this._parentElement.map(parent =>
      parent.querySelector('.search__field')
    );
  }

  addHandlerSearch(controlFunc) {
    this._getSearchBars();
    this._parentElement.forEach(parent => {
      parent.addEventListener('submit', function (e) {
        const searchBar = this.querySelector('.search__field');
        if (!searchBar?.value) return;
        controlFunc(searchBar.value);
        e.preventDefault();
      });
    });
  }
}

export default new SearchView();
