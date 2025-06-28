import icon from "url:../../img/icons.svg";
import View from "./view.js";
import previewView from "./previewView.js";

class BookmarkView extends View {
  _parentEl = document.querySelector(".bookmarks__list");
  _errorMessage =
    "No bookmarks yet. Try to find a nice recipe to bookmark it ;)";
  _message = "";

  addHandlerBookmark(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new BookmarkView();
