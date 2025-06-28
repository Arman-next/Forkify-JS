import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import recipeSearch from "./views/recipeSearch.js";
import recipeResult from "./views/recipeResult.js";
import paginationView from "./views/paginationView.js";
import bookmarkView from "./views/bookmarkView.js";
import addRecipeView from "./views/addRecipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { MODAL_CLOSE_SEC } from "./config.js";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeResult.update(model.getResultPage());
    bookmarkView.update(model.state.bookmarks);

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearch = async function () {
  try {
    recipeResult.renderSpinner();

    const query = recipeSearch.getQuery();
    if (!query) return;

    await model.loadSearchResult(query);

    recipeResult.render(model.getResultPage());

    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (gotoPage) {
  recipeResult.render(model.getResultPage(gotoPage));

  paginationView.render(model.state.search);
};

const controlServings = function (newServing) {
  model.updateServings(newServing);
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  recipeView.update(model.state.recipe);
  bookmarkView.render(model.state.bookmarks);
};

const controlStoreBookmark = function () {
  bookmarkView.render(model.state.bookmarks);
};

const controlUpload = async function (myRecipe) {
  try {
    await model.uploadRecipe(myRecipe);

    recipeView.render(model.state.recipe);

    addRecipeView.renderSucces();

    bookmarkView.render(model.state.bookmarks);

    window.history.pushState(null, "", `#${model.state.recipe.id}`);

    setTimeout(function () {
      addRecipeView.toggleForm();
    }, MODAL_CLOSE_SEC * 1000);
    console.log(model.state.recipe);
  } catch (error) {
    // console.log(error);
    addRecipeView.renderError(error.message);
  }
};

const init = function () {
  bookmarkView.addHandlerBookmark(controlStoreBookmark);
  recipeView.addEventHandler(controlRecipe);
  recipeView.addHandlerUpdateServing(controlServings);
  recipeView.addHnadlerAddBookmark(controlBookmark);
  recipeSearch.addEventHandlerSearch(controlSearch);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlUpload);
};
init();
