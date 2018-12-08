import Facility from './facility';
class Shell extends Facility {
    constructor() {
        super();
        this.key = undefined;
        this.speed = 0;
    }

    setSpeed(value) {
        this.speed = parseInt(value);
    }

    getSpeed() {
        return this.speed;
    }
}