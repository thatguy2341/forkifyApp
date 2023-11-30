'use strict';
import { API_URL, API_KEY, RESULTS_PER_PAGE } from './config';
import { AJAX, getMaxPage } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
    page: 1,
    maxPage: 1,
  },
  bookmarks: [],
};

const formatRecipe = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    imageUrl: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    sourceUrl: recipe.source_url,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${API_KEY}`);
    state.recipe = formatRecipe(data);

    if (state.bookmarks.some(bookmark => bookmark.id === state.recipe.id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (error) {
    console.error(error);
  }
};

export const loadSearchResults = async function (search) {
  try {
    state.search.query = search;

    const data = await AJAX(`${API_URL}?search=${search}&key=${API_KEY}`);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        imageUrl: recipe.image_url,
        publisher: recipe.publisher,
        ...(recipe.key && { key: recipe.key }),
      };
    });
    state.search.maxPage = getMaxPage(state.search.results.length);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSearchResultsPage = function (page = 1) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (amount) {
  const relativeServing = amount / state.recipe.servings;
  state.recipe.servings = amount;
  state.recipe.ingredients = state.recipe.ingredients.map(ingridient => {
    if (!ingridient.quantity) return ingridient;
    ingridient.quantity = ingridient.quantity * relativeServing;
    return ingridient;
  });
};

const updateLocalStorage = function () {
  // Update bookmarks object in local storage:
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookMark = function (recipe) {
  // Add bookmark:
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked:
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  updateLocalStorage();
};

export const removeBookMark = function (id) {
  // Delete bookmark:
  state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== id);

  // Mark as not bookmarked:
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  updateLocalStorage();
};

export const uploadRecipe = async function (recipe) {
  try {
    const ingredients = Object.entries(recipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1])
      .map(ingredient => {
        const newIngredient = ingredient[1].split(',').map(ing => ing.trim());
        if (newIngredient.length !== 3)
          throw new Error(
            'Used wrong format for inserting an ingredient! Please use the specified format.'
          );
        const [quantity, unit, description] = newIngredient;

        return { quantity: +quantity || null, unit, description };
      });
    const formattedRecipe = {
      title: recipe.title,
      source_url: recipe.sourceUrl,
      image_url: recipe.image,
      publisher: recipe.publisher,
      cooking_time: +recipe.cookingTime,
      servings: +recipe.servings,
      ingredients,
    };
    const data = await AJAX(`${API_URL}?key=${API_KEY}`, formattedRecipe);
    state.recipe = formatRecipe(data);
    addBookMark(state.recipe);
  } catch (error) {
    throw error;
  }
};

const resetStorage = function () {
  localStorage.removeItem('bookmarks');
};
resetStorage();

const initStorage = function () {
  const storageBookmarks = localStorage.getItem('bookmarks');
  if (storageBookmarks) {
    state.bookmarks = JSON.parse(storageBookmarks);
  }
};

initStorage();
