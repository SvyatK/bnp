import Facility from './facility';
class Unit extends Facility {
    constructor() {
        super();
        this.ammo = 0;
        this.armour = 0;
        this.speed = 0;
    }

    setArmour(value) {
        this.armour = parseInt(value);
    }

    getArmour() {
        return this.armour;
    }

    setPosX(value) {
        this.posX = value;
    }

    getPosX() {
        return this.posX;
    }

    setPosY(value) {
        this.posY = value;
    }

    getPosY() {
        return this.posY;
    }

    setCoordinates(x ,y) {
        this.setPosX(x);
        this.setPosY(y);
    }
}
export default Unit;