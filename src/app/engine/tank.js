import Unit from './unit';
import {Events} from "./EventBus";
import {TILE_PX, BATTLE_FIELD_Y_PX, BATTLE_FIELD_X_PX} from "../constants";

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
       // clearTimeout(this.timeout);
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

    adjustCoordinates(direction, itemForUpdate) {
        switch (direction) {
            case Events.TANK_MOVE_UP: {
                if(Math.abs(this.posY - itemForUpdate.posY - TILE_PX) < TILE_PX/5){
                    this.posY = itemForUpdate.posY + TILE_PX+2;
                }
                break;
            }

            case Events.TANK_MOVE_DOWN: {
                if(Math.abs(this.posY - itemForUpdate.posY + TILE_PX) < TILE_PX/5){
                    this.posY = itemForUpdate.posY - TILE_PX-2;
                }
                break;
            }

            case Events.TANK_MOVE_LEFT: {
                if(Math.abs(this.posX - itemForUpdate.posX - TILE_PX) < TILE_PX/5){
                    this.posX = itemForUpdate.posX + TILE_PX+2;
                }
                break;
            }

            case Events.TANK_MOVE_RIGHT: {
                if(Math.abs(this.posX - itemForUpdate.posX + TILE_PX) < TILE_PX/5){
                    this.posX = itemForUpdate.posX - TILE_PX-2;
                }
                break;
            }

            default:
                console.warn('default');
                break;
        }
    }



    moveUp() {
        const currentY = this.getPosY();
        if (currentY > 0) {
            this.setPosY(currentY - 1);
        }
    }
    moveDown() {
        const currentY = this.getPosY();
        if (currentY < (BATTLE_FIELD_Y_PX - TILE_PX)) {
            this.setPosY(currentY + 1);
        }
    }
    moveLeft() {
        const currentX = this.getPosX();
        if (currentX > 0) {
            this.setPosX(currentX - 1);
        }
    }
    moveRight() {
        const currentX = this.getPosX();
        if (currentX < (BATTLE_FIELD_X_PX - TILE_PX)) {
            this.setPosX(currentX + 1);
        }

    }

}
export default Tank;
