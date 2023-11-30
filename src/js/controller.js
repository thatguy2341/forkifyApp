'use strict';
// TODO:
// 1. display amount of pages.
// 2. Perform ingridient validation before completely submitting.
// 3. shopping list -> add all ingridients
// 4. get nutrition data. (quite hard need to add another api)

// DONE:
// 5. make website responsive (useable with different window sizes):
// make navbar responsive with a nice animation.
// rendering recipe or searching a query will switch between recipe and results containers.
// add scrollers for big modals.

import 'core-js/stable/array/find';
import 'regenerator-runtime/runtime';
import { TIMEOUTCLOSEMODAL, PHONE_MODE_PX } from './config.js';
import * as model from './model';
import { checkIfWindowSmaller } from './helpers.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import navView from './views/navView.js';
import responsiveView from './views/responsiveView.js';

////////////////////////////////////////

const controlRecipes = async function () {
  // Get recipe Info:
  const id = window.location.hash.replace('#', '');
  if (!id) return;
  try {
    if (checkIfWindowSmaller(PHONE_MODE_PX)) responsiveView.focusFirst();
    // 1. Show spinner
    recipeView.renderSpinner();
    // 2. Mark selected recipe:
    resultsView.update(model.getSearchResultsPage());
    // 3. Mark selected recipes in bookmarks list:
    bookmarksView.update(model.state.bookmarks);
    // 4. Load Recipe:
    await model.loadRecipe(id);
    // 5. Render Recipe in web:
    recipeView.render(model.state.recipe);
  } catch (error) {
    // Show error message
    console.error(error);
  }
};

const controlSearch = async function () {
  try {
    if (checkIfWindowSmaller(PHONE_MODE_PX)) responsiveView.focusSecond();

    // 1. render spinner:
    resultsView.renderSpinner();

    // 2. Get search input:
    const search = searchView.getQuery();
    console.log(search);
    if (!search) return;

    // 3. Load results:
    await model.loadSearchResults(search);

    // 4. render results:
    resultsView.render(model.getSearchResultsPage());

    // 5. render pagination buttons:
    paginationView.render({
      page: model.state.search.page,
      maxPage: model.state.search.maxPage,
    });
  } catch (error) {
    // render error:
    console.error(error);
  }
};

const controlPagination = function (newPage) {
  // 1. update current page:
  model.state.search.page = newPage;

  // 2. render new results:
  resultsView.render(model.getSearchResultsPage(newPage));

  // 3. render new pagination buttons:
  paginationView.render({
    page: newPage,
    maxPage: model.state.search.maxPage,
  });
};

const controlServings = function (newServingsAmount) {
  // 1. Update the servings amount
  model.updateServings(newServingsAmount);

  // 2. Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlBookmarks = function (change = true) {
  // 1. Remove or add a bookmark:
  if (change) {
    if (model.state.recipe.bookmarked)
      model.removeBookMark(model.state.recipe.id);
    else model.addBookMark(model.state.recipe);
  }

  // 2. render bookmarks in list:
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    if (checkIfWindowSmaller(PHONE_MODE_PX)) responsiveView.focusFirst();
    // Show loading spinner:
    addRecipeView.renderSpinner();

    // Add recipe to api and update the state recipe:
    await model.uploadRecipe(newRecipe);

    // Render new recipe:
    recipeView.render(model.state.recipe);

    // Show success message:
    addRecipeView.renderMessage();

    // Render new recipe in bookmarks:
    bookmarksView.render(model.state.bookmarks);

    // Change ID in the url (hash):
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form:
    setTimeout(function () {
      addRecipeView.render([true]);
      addRecipeView.toggleModal();
    }, TIMEOUTCLOSEMODAL * 1000);
  } catch (error) {
    console.error(error);
    addRecipeView.renderErrorMessage(error.message);
  }
};

const controlResponsive = function () {
  if (checkIfWindowSmaller(PHONE_MODE_PX)) {
    navView.collapseNav();
    responsiveView.organizeTinyGrid();
  } else {
    navView.showNav();
    responsiveView.organizeBigGrid();
  }
};

const init = function () {
  // Declares the functionality of the website.
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmarks);
  paginationView.addHandlerRender(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  responsiveView.addHandlerRender(controlResponsive);
  searchView.addHandlerSearch(controlSearch);
};
init();

if (module.hot) {
  module.hot.accept();
}
