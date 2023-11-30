'use strict';

import View from './view';
import icons from '../../img/icons.svg';
import { Fraction } from 'fractional';

export class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'No recipes found for the given id. Please try again!';
  _succesMessage;

  addHandlerRender(handlerFunc) {
    ['hashchange', 'load'].forEach(e =>
      window.addEventListener(e, handlerFunc)
    );
  }

  addHandlerServings(handlerFunc) {
    this._parentElement.addEventListener('click', function (e) {
      const button = e.target.closest('.btn--tiny[data-change]');
      if (!button) return;

      const changeTo = +button.dataset.change;
      if (changeTo > 0) handlerFunc(changeTo);
    });
  }

  addHandlerBookmark(handlerFunc) {
    this._parentElement.addEventListener('click', function (e) {
      const button = e.target.closest('#bookmark-btn');
      if (!button) return;

      if (button.getAttribute('data-active') === 'true') {
        button.setAttribute('data-active', 'false');
        button.innerHTML = `
        <svg class="">
          <use href="${icons}#icon-bookmark"></use>
        </svg>`;
      } else {
        button.setAttribute('data-active', 'true');
        button.innerHTML = `
        <svg class="">
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>`;
      }

      handlerFunc();
    });
  }

  _renderHTML() {
    const recipe = this._data;
    return `        
    <figure class="recipe__fig">
    <img src="${recipe.imageUrl}" alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${recipe.title}</span>
    </h1>
  </figure>
  
  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        recipe.cookingTime
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        recipe.servings
      }</span>
      <span class="recipe__info-text">servings</span>
  
      <div class="recipe__info-buttons">
        <button data-change="${
          recipe.servings - 1
        }" class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
        <button data-change="${
          recipe.servings + 1
        }"  class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
  
    <div class="recipe__user-generated ${recipe.key ? '' : 'hidden'}">
      <svg>
        <use href="${icons}.svg#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round" id="bookmark-btn" data-active=${
      recipe.bookmarked ? 'true' : 'false'
    }>
      <svg class="">
        <use href="${icons}#${
      recipe.bookmarked ? 'icon-bookmark-fill' : 'icon-bookmark'
    }"></use>
      </svg>
    </button>
  </div>
  
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${recipe.ingredients
        .map(ingredient => this._generateHtmlForIngredient(ingredient))
        .join('')}
    </ul>
  </div>
  
  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${
        recipe.publisher
      }</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${recipe.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`;
  }

  _generateHtmlForIngredient(ingredient) {
    return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        ingredient.quantity ? new Fraction(ingredient.quantity).toString() : ''
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ingredient.unit || ''}</span>
        ${ingredient.description ?? ''}
      </div>
    </li>`;
  }
}

export default new RecipeView();
