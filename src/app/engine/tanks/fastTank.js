import DefaultTank from "./defaultTank";

export default class FastTank extends DefaultTank {
    constructor() {
        super(
            1, // one shot
            4, // cells in second
        );

        console.log('fastTank', this);
    }

    getAmmo() {
        return this.ammo;
    }

    getSpeed() {
        return this.speed;
    }
}
