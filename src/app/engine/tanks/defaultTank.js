import Unit from '../unit';

export default class DefaultTank extends Unit {
    constructor(
        ammo = 3, // one shot
        speed = 2, // cells in second
        rapidityOfFire = 6, // bullet in second
    ) {
        super();
        Object.assign(this, {
            ammo,
            speed,
            rapidityOfFire,
        });

        console.log('defaultTank', this);
    }

    getAmmo() {
        return this.ammo;
    }

    getSpeed() {
        return this.speed;
    }
}
