import Unit from './unit';
import EventBus from "./EventBus";

class Tank extends Unit {
    constructor() {
        super();
        this.reloadDuration = 0;
        this.accuracy = 0;
        this.minDamage = 0;
        this.maxDamage = 0;
        this.bitcoin = 0;
        this.frags = 0;
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

    act() {
        EventBus.reveal('EVENT!')
    }
}
export default Tank;
