import Unit from './unit';
import {Events} from "./EventBus";

class Tank extends Unit {
    constructor() {
        super();
        this.reloadDuration = 0;
        this.accuracy = 0;
        this.minDamage = 0;
        this.maxDamage = 0;
        this.bitcoin = 0;
        this.frags = 0;
        this.lastEvent = Events.TANK_MOVE_UP;
    }

    getLastEvent() {
        return this.lastEvent;
    }

    setBitcoin(value) {
        this.bitcoin = parseInt(value);
    }

    getBitcoin() {
        return this.bitcoin;
    }

    setFrags(value) {
        this.frags = parseInt(value);
    }

    getFrags() {
        return this.frags;
    }

    applyBitcoin(value) {
        this.bitcoin += parseInt(value);
    }

    applyFrags(value) {
        this.frags += parseInt(value);
    }

    setReloadDuration(value) {
        this.reloadDuration = parseInt(value);
    }

    getReloadDuration() {
        return this.reloadDuration;
    }

    setMinDamage(value) {
        this.minDamage = parseInt(value);
    }

    setMaxDamage(value) {
        this.maxDamage = parseInt(value);
    }

    setDamage(min, max) {
        this.setMinDamage(min);
        this.setMaxDamage(max);
    }

    getMinDamage() {
        return this.minDamage;
    }

    getMaxDamage() {
        return this.maxDamage;
    }

    setAccuracy(value) {
        this.accuracy = parseInt(value);
    }

    getAccuracy() {
        return this.accuracy;
    }

    fire() {
        if (this.ammo > 0) {
            --this.ammo;
        } 
    }

    applyAmmo(value) {
        this.ammo += parseInt(value);
    }

    setAmmo(value) {
        this.ammo = parseInt(value);
    }

    getAmmo() {
        return this.ammo;
    }

    applyArmour(value) {
        this.armour += parseInt(value);
    }

    setSpeed(value) {
        this.speed = parseInt(value);
    }

    getSpeed() {
        return this.speed;
    }

    act(eventName) {
        // TODO: check events
        this.move(eventName);
    }

    move(direction) {
        this.lastEvent = direction;
        clearTimeout(this.timeout);
        switch (direction) {
            case Events.TANK_MOVE_UP: {
                this.moveUp();
                break;
            }

            case Events.TANK_MOVE_DOWN: {
                this.moveDown();
                break;
            }

            case Events.TANK_MOVE_LEFT: {
                this.moveLeft();
                break;
            }

            case Events.TANK_MOVE_RIGHT: {
                this.moveRight();
                break;
            }

            default:
                console.warn('default');
                break;
        }
    }

    adjustCoordinates(direction) {
        switch (direction) {
            case Events.TANK_MOVE_UP: {
                this.posY = this.posY + 2;
                break;
            }

            case Events.TANK_MOVE_DOWN: {
                this.posY = this.posY - 2;
                break;
            }

            case Events.TANK_MOVE_LEFT: {
                this.posX = this.posX + 2;
                break;
            }

            case Events.TANK_MOVE_RIGHT: {
                this.posX = this.posX - 2;
                break;
            }

            default:
                console.warn('default');
                break;
        }
    }



    moveUp() {
        const currentY = this.getPosY();

        if(currentY % 32 !== 0) {
            this.setPosY(currentY - 1);
            this.timeout = setTimeout(this.moveUp.bind(this), 1000/30);
        }
    }
    moveDown() {
        const currentY = this.getPosY();

        if(currentY % 32 !== 0) {
            this.setPosY(currentY + 1);
            this.timeout = setTimeout(this.moveDown.bind(this), 1000/30);
        }
    }
    moveLeft() {
        const currentX = this.getPosX();

        if(currentX % 32 !== 0) {
            this.setPosX(currentX - 1);
            this.timeout = setTimeout(this.moveLeft.bind(this), 1000/30);
        }
    }
    moveRight() {
        const currentX = this.getPosX();
        if(currentX % 32 !== 0) {
            this.setPosX(currentX + 1);
            this.timeout = setTimeout(this.moveRight.bind(this), 1000/30);
        }

    }

}
export default Tank;
