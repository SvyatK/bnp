import Sprite from './sprite';
class Road extends Sprite {
    constructor() {
        super();
        this.isCrossable = true;
        this.imgSource = '/images/road.png';
    }
}
export default Road;