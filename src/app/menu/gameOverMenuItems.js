import MenuItem from './menuItem';

class StartAgain extends MenuItem {
  constructor() {
    super();
    this.setTitle('TO MAIN MENU');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}
export default [
  new StartAgain(),
];
