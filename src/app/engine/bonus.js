import Sprite from './sprite';
class Bonus extends Sprite {
    constructor() {
        super();
        this.isCrossable = true;
        console.log('bonus');
    }
}
export default Bonus;