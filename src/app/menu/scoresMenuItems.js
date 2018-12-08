import MenuItem from './menuItem';

class NextStageMenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('Next Stage');
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
  new NextStageMenuItem(),
  new BackMenuItem(),
];
