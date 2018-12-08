import Facility from './facility';
import { Events } from './EventBus';
import { SHELL_PX, TILE_PX, SHELL_OFFSET_PX } from '../constants'; 

export default class Shell extends Facility {
    constructor(currentTank) {
        super();
        this.key = undefined;
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

    run() {
        setInterval(this._mover, (20 * this.speed));
        console.log('start loop for shell fly');
    }

    _initShellByDirection(tank) {
        switch (tank.getLastEvent()) { // eslint-disable-line
            case Events.TANK_MOVE_UP: {
                this.setImgSource('/images/bullet_up.png');
                this._mover = () => { this.setPosY(this.getPosY() - SHELL_OFFSET_PX) };
                this.setPosX(tank.getPosX() + (TILE_PX / 2 - SHELL_PX / 2));
                this.setPosY(tank.getPosY() - SHELL_PX);
                break;
            }
            case Events.TANK_MOVE_DOWN: {
                this.setImgSource('/images/bullet_down.png');
                this._mover = () => { this.setPosY(this.getPosY() + SHELL_OFFSET_PX) };
                this.setPosX(tank.getPosX() + (TILE_PX / 2 - SHELL_PX / 2));
                this.setPosY(tank.getPosY() + TILE_PX);
                break;
            }
            case Events.TANK_MOVE_LEFT: {
                this.setImgSource('/images/bullet_left.png');
                this._mover = () => { this.setPosX(this.getPosX() - SHELL_OFFSET_PX) };
                this.setPosX(tank.getPosX() - SHELL_PX);
                this.setPosY(tank.getPosY() + (TILE_PX / 2 - SHELL_PX / 2));
                break;
            }
            case Events.TANK_MOVE_RIGHT: {
                this.setImgSource('/images/bullet_right.png');
                this._mover = () => { this.setPosX(this.getPosX() + SHELL_OFFSET_PX) };
                this.setPosX(tank.getPosX() + TILE_PX);
                this.setPosY(tank.getPosY() + (TILE_PX / 2 - SHELL_PX / 2));
                break;
            }
            default: 
                this.setImgSource('/images/default.gif');
        }
    };    
}
