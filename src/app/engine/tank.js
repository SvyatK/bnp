import Unit from './unit';
class Tank extends Unit {
    constructor() {
        super();
        this.accuracy = 0;
        this.minDamage = 0;
        this.maxDamage = 0;
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

}
export default Tank;