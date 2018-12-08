import Facility from './facility';
import { Events } from './EventBus';

const getImageSource = (directionEvent) => {
    switch (directionEvent) { // eslint-disable-line
        case Events.SHELL_MOVE_UP: {
            return '/images/bullet_up.png';
        }
        case Events.SHELL_MOVE_DOWN: {
            return '/images/bullet_down.png';
        }
        case Events.SHELL_MOVE_LEFT: {
            return '/images/bullet_left.png';
        }
        case Events.SHELL_MOVE_RIGHT: {
            return '/images/bullet_right.png';
        }
        default: 
            return '/images/bullet_up.png';
    }
};

export default class Shell extends Facility {
    constructor(directionEvent) {
        super();
        this.key = undefined;
        this.speed = 2;
        this.setImgSource(getImageSource(directionEvent));
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
        console.log('start loop for shell fly');
    }
}
