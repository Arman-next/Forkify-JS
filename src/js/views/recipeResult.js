import icon from "url:../../img/icons.svg";
import View from "./view.js";
import previewView from "./previewView.js";

class RecipeResult extends View {
  _parentEl = document.querySelector(".results");
  _errorMessage =
    "We could not find any recipe of your query. Please try another;)";
  _message = "";

  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new RecipeResult();
