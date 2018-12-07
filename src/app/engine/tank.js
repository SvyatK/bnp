import Unit from './unit';
class Tank extends Unit {
    constructor() {
        super();
        console.log('tank');
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

    applyDamage(value) {
        if (this.armour <= parseInt(value) {
            this.armour = 0;
        } else {
            this.armour -= parseInt(value);
        }
    }
}
export default Tank;