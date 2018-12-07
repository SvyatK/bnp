import Sprite from './sprite';
class Bridge extends Sprite {
    constructor() {
        super();
        this.isCrossable = true;
        console.log('bridge');
    }
}
export default Bridge;