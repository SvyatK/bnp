import MenuItem from './menuItem';

class Player1MenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('PLAYER 1');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}

class Player2MenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('PLAYER 2');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}

class ConstructionMenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('CONSTRUCTION');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}

export default [
  new Player1MenuItem(),
  new Player2MenuItem(),
  new ConstructionMenuItem(),
];