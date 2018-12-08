import Route from '../routes/route';
import modeMenuItems from './modeMenuItems';
import gameOverMenuItems from './gameOverMenuItems';
import scoresMenuItems from './scoresMenuItems';
import stageMenuItems from './stageMenuItems';
import winMenuItems from './winMenuItems';
import main from '../main';
import * as PIXI from 'pixi.js';
import { TILE_PX } from '../constants';

class Menu {
  constructor({ stage }) {
    this._selected_item = 0;
    this._items = [];
    this._stage_ctx = stage;
    this._title = '';
  }

  setItems(items) {
    this._items = items;
  }

  setTitle(title) {
    this._title = title;
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
  const menu = new Menu(main);
  switch (Route.getPage()) {
    case Route.PAGES[0]: {
      console.log(Route.PAGES[0]);
      menu.setTitle('Select Mode:');
      menu.setItems(modeMenuItems);
      // menu.getCurrentItem().execute();
      break;
    }
    case Route.PAGES[1]: {
      console.log(Route.PAGES[1]);
      menu.setTitle('Stage:');
      menu.setItems(stageMenuItems);
      break;
    }
    case Route.PAGES[2]: {
      console.log(Route.PAGES[2]);
      menu.setTitle('Your Scores:');
      menu.setItems(scoresMenuItems);
      break;
    }
    case Route.PAGES[3]: {
      console.log(Route.PAGES[3]);
      break;
    }
    case Route.PAGES[4]: {
      console.log(Route.PAGES[4]);
      menu.setTitle('You Win!');
      menu.setItems(winMenuItems);
      break;
    }
    case Route.PAGES[5]: {
      console.log(Route.PAGES[5]);
      menu.setTitle('Game Over!');
      menu.setItems(gameOverMenuItems);
      break;
    }
    default:
        console.warn('default');
        break;
  }
  menu.renderMenu();
}

window.addEventListener('hashchange', onNavigation, false);
