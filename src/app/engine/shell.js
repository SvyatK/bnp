import Facility from './facility';
import { Events } from './EventBus';
import { SHELL_PX, TILE_PX, SHELL_OFFSET_PX } from '../constants'; 

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
        this.key = currentTank.key;
        this.speed = 1;
        this.direction = ''
        this._mover = () => {};
        this._initShellByDirection(currentTank);
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
        return () => { this.setPosY(this.getPosY() - SHELL_OFFSET_PX) };
    }

    _moveDown() {
        return () => { this.setPosY(this.getPosY() + SHELL_OFFSET_PX) };
    }

    _moveRight() {
        return () => { this.setPosX(this.getPosX() + SHELL_OFFSET_PX) };
    }

    _moveLeft() {
        return () => { this.setPosX(this.getPosX() - SHELL_OFFSET_PX) };
    }

    run() {
        setInterval(this._mover, (20 * this.speed));
        console.log('start loop for shell fly');
    }

    act(eventName) {
        // TODO: check events
    }

    _initShellByDirection(tank) {
        switch (tank.getLastEvent()) { // eslint-disable-line
            case Events.TANK_MOVE_UP: {
                this.setImgSource('/images/bullet_up.png');
                this._mover = this._moveUp();
                this.setPosX(tank.getPosX() + (TILE_PX / 2 - SHELL_PX / 2));
                this.setPosY(tank.getPosY() - SHELL_PX);
                break;
            }
            case Events.TANK_MOVE_DOWN: {
                this.setImgSource('/images/bullet_down.png');
                this._mover = this._moveDown();
                this.setPosX(tank.getPosX() + (TILE_PX / 2 - SHELL_PX / 2));
                this.setPosY(tank.getPosY() + TILE_PX);
                break;
            }
            case Events.TANK_MOVE_LEFT: {
                this.setImgSource('/images/bullet_left.png');
                this._mover = this._moveLeft();
                this.setPosX(tank.getPosX() - SHELL_PX);
                this.setPosY(tank.getPosY() + (TILE_PX / 2 - SHELL_PX / 2));
                break;
            }
            case Events.TANK_MOVE_RIGHT: {
                this.setImgSource('/images/bullet_right.png');
                this._mover = this._moveRight();
                this.setPosX(tank.getPosX() + TILE_PX);
                this.setPosY(tank.getPosY() + (TILE_PX / 2 - SHELL_PX / 2));
                break;
            }
            default: 
                this.setImgSource('/images/default.gif');
        }
    };    
}
