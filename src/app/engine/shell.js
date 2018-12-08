import Facility from './facility';
import { Events } from './EventBus';

const getImageSource = (directionEvent) => {
    switch (directionEvent) { // eslint-disable-line
        case Events.TANK_MOVE_UP: {
            return '/images/bullet_up.png';
        }
        case Events.TANK_MOVE_DOWN: {
            return '/images/bullet_down.png';
        }
        case Events.TANK_MOVE_LEFT: {
            return '/images/bullet_left.png';
        }
        case Events.TANK_MOVE_RIGHT: {
            return '/images/bullet_right.png';
        }
        default: 
            return '/images/bullet_up.png';
    }
};

export default class Shell extends Facility {
    constructor(currentTank) {
        super();
        this.key = undefined;
        this.speed = 1;
        const directionEvent = currentTank.getLastEvent();
        this.setImgSource(getImageSource(directionEvent));
        this.setPosX(currentTank.getPosX());
        this.setPosY(currentTank.getPosY());
    }

    setSpeed(value) {
        this.speed = parseInt(value);
    }

    getSpeed() {
        return this.speed;
    }

    adjustCoordinates() {
        console.log('adjust shell coordinates');
    }

    run() {
        setInterval(() => { this.setPosY(this.getPosY() - 3) }, (20 * this.speed));
        console.log('start loop for shell fly');
    }
}
