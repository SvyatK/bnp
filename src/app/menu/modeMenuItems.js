import MenuItem from './menuItem';

class SingleMenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('Single player');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}

class CooperativeMenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('Cooperative');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}

class ExitMenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('Exit');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}

export default [
  new SingleMenuItem(),
  new CooperativeMenuItem(),
  new ExitMenuItem(),
];
