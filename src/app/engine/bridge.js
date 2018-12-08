import Sprite from './sprite';
class Bridge extends Sprite {
    constructor() {
        super();
        this.isCrossable = true;
        this.imgSource = '/images/bridge.png';
    }
}
export default Bridge;