import Unit from './unit';
import EventBus, {Events} from "./EventBus";
import * as random from 'lodash.random';

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
        }
    }

    moveUp() {
        const currentY = this.getPosY();
        this.setPosY(currentY - 1);
    }
    moveDown() {
        const currentY = this.getPosY();
        this.setPosY(currentY + 1);
    }
    moveLeft() {
        const currentX = this.getPosX();
        this.setPosX(currentX - 1);
    }
    moveRight() {
        const currentX = this.getPosX();
        this.setPosX(currentX + 1);
    }

    randomIntent() {
        const move = random(0, 3);

        const events = [
            Events.TANK_MOVE_UP,
            Events.TANK_MOVE_DOWN,
            Events.TANK_MOVE_LEFT,
            Events.TANK_MOVE_RIGHT,
        ];

        EventBus.reveal(events[move], this);
    }
}
export default Tank;
