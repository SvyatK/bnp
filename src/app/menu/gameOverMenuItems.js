import MenuItem from './menuItem';

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
  new ContinueMenuItem(),
  new BackMenuItem(),
];
