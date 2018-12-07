import Facility from './facility';
class Entity extends Facility {
    constructor() {
        super();
        this.armour = 0;
    }

    applyDamage(value) {
        if (this.armour <= parseInt(value)) {
            this.armour = 0;
        } else {
            this.armour -= parseInt(value);
        }
    }
}
export default Entity;