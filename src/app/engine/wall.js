import Entity from './entity';
class Wall extends Entity {
    constructor() {
        super();
        this.armour = 1000;
        console.log('wall');
    }
}
export default Wall;