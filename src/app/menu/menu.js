import Route from '../routes/route';
import modeMenuItems from './modeMenuItems';
import main from '../main';
import * as PIXI from 'pixi.js';
import { TILE_PX } from '../constants';

class Menu {
  constructor(title, { stage }) {
    this._selected_item = 0;
    this._items = [];
    this._stage_ctx = stage;
    this._title = title;
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

  renderMenu() {
    this._stage_ctx.removeChildren();
    const stage = this._stage_ctx;
    const style = new PIXI.TextStyle({
      fill: 'white',
      fontFamily: 'Arial',
    });
    const title = new PIXI.Text(this._title, style);
    title.x = TILE_PX * 3;
    title.y = TILE_PX * 4;
    stage.addChild(title);
    this._items
      .forEach((item, i) => {
        const textLine = new PIXI.Text(item.getTitle(), style);
        textLine.x = TILE_PX * 4;
        textLine.y = (TILE_PX * 6) + i * TILE_PX;
        stage.addChild(textLine);
      });
  }
};

const onNavigation = () => {
  switch (Route.getPage()) {
    case Route.PAGES[0]: {
      console.log(Route.PAGES[0]);
      const menu = new Menu('Select Mode:', main);
      menu.setItems(modeMenuItems);
      menu.renderMenu();
      // menu.getCurrentItem().execute();
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
