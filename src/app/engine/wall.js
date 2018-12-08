import Entity from './entity';
class Wall extends Entity {
    constructor() {
        super();
        this.armour = 1000;
        this.imgSource = '/images/wall.png';
    }
}
export default Wall;