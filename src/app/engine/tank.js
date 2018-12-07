import Unit from './unit';
class Tank extends Unit {
    constructor() {
        super();
        console.log('tank');
    }

    setAmmo(value) {
        this.ammo = parseInt(value);
    }

    getAmmo() {
        return this.ammo;
    }

    setArmour(value) {
        this.armour = parseInt(value);
    }

    getArmour() {
        return this.armour;
    }

    setSpeed(value) {
        this.speed = parseInt(value);
    }

    getSpeed() {
        return this.speed;
    }
}
export default Tank;