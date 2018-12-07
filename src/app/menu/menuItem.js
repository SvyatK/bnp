export default class MenuItem {
  constructor() {
    this._title = '';
  }

  setTitle(title) {
    this._title = title;
  }

  getTitle() {
    return this._title;
  }

  execute() {
    // insert render method from upper classes
  }
};
