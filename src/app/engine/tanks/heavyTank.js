import DefaultTank from "./defaultTank";

export default class HeavyTank extends DefaultTank {
    constructor() {
        super(
            3, // three hits for the kill
            1, // cells in second
        );

        console.log('heavyTank', this);
    }

    getAmmo() {
        return this.ammo;
    }

    getSpeed() {
        return this.speed;
    }
}
