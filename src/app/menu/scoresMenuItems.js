import MenuItem from './menuItem';

class ScoresMenuItem extends MenuItem {
  constructor() {
    super();
    this.setTitle('CONTINUE');
  }

  execute() {
    console.log(`menu item ${this.getTitle()} selected`);
  }
}
export default [
  new ScoresMenuItem(),
];
