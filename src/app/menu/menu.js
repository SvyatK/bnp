import Route from '../routes/route';
import modeMenuItems from './modeMenuItems';

class Menu {
  constructor() {
    this._selected_item = 0;
    this._items = [];
  }

  setItems(items) {
    this._items = items;
  }

  getCurrentItem() {
    return this._items[this._selected_item];
  }

  selectNextItem() {
    this._selected_item += 1;
    if (this._selected_item >= this._items.length) {
      this._selected_item = 0;
    }
  }

  isCurrentItem(item) {
    return this.getCurrentItem() === item;
  }

  executeCurrentItem() {
    this.getCurrentItem().execute();
  }  
};

const onNavigation = () => {
  const currentPage = Route.getPage();
  switch (currentPage) {
    case Route.PAGES[0]: {
      console.log(Route.PAGES[0]);
      const menu = new Menu();
      menu.setItems(modeMenuItems);
      menu.getCurrentItem().execute();
      break;
    }
    case Route.PAGES[1]: {
      console.log(Route.PAGES[1]);
      break;
    }
    case Route.PAGES[2]: {
      console.log(Route.PAGES[2]);
      break;
    }
    case Route.PAGES[3]: {
      console.log(Route.PAGES[3]);
      break;
    }
    case Route.PAGES[4]: {
      console.log(Route.PAGES[4]);
      break;
    }
    case Route.PAGES[5]: {
      console.log(Route.PAGES[5]);
      break;
    }
    default: {
      // DEL
    }
  }
}

window.addEventListener('hashchange', onNavigation, false);
