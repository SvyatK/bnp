import Facility from './facility';
class Unit extends Facility {
    constructor() {
        super();
        this.ammo = 0;
        this.armour = 0;
        this.speed = 0;
    }
}
export default Unit;