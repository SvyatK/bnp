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

    applyDamage(value) {
        if (this.armour <= parseInt(value)) {
            this.armour = 0;
        } else {
            this.armour -= parseInt(value);
        }
    }
}
export default Unit;