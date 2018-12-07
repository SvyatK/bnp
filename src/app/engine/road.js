import Sprite from './sprite';
class Road extends Sprite {
    constructor() {
        super();
        this.isCrossable = true;
        console.log('road');
    }
}
export default Road;