import MenuItem from './menuItem';

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
  new ExitMenuItem(),
];
