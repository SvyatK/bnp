import MenuItem from './menuItem';

class NewGameMenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('New Game');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}

class ContinueMenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('Continue');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}

class BackMenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('Back');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}

export default [
  new NewGameMenuItem(),
  new ContinueMenuItem(),
  new BackMenuItem(),
];
