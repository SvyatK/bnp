import Facility from './facility';
import { Events } from './EventBus';
import { SHELL_PX } from '../constants'; 

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
        this.direction = ''
        this._mover = () => {};
        this._initShellByDirection(currentTank.getLastEvent());
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

    _moveUp() {
        return () => { this.setPosY(this.getPosY() - 3) };
    }

    _moveDown() {
        return () => { this.setPosY(this.getPosY() + 3) };
    }

    _moveRight() {
        return () => { this.setPosX(this.getPosX() + 3) };
    }

    _moveLeft() {
        return () => { this.setPosX(this.getPosX() - 3) };
    }

    run() {
        setInterval(this._mover, (20 * this.speed));
        console.log('start loop for shell fly');
    }

    _initShellByDirection(directionEvent) {
        switch (directionEvent) { // eslint-disable-line
            case Events.TANK_MOVE_UP: {
                this.setImgSource('/images/bullet_up.png');
                this._mover = this._moveUp();
                break;
            }
            case Events.TANK_MOVE_DOWN: {
                this.setImgSource('/images/bullet_down.png');
                this._mover = this._moveDown();
                break;
            }
            case Events.TANK_MOVE_LEFT: {
                this.setImgSource('/images/bullet_left.png');
                this._mover = this._moveLeft();
                break;
            }
            case Events.TANK_MOVE_RIGHT: {
                this.setImgSource('/images/bullet_right.png');
                this._mover = this._moveRight();
                break;
            }
            default: 
                this.setImgSource('/images/default.gif');
        }
    };    
}
