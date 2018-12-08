import * as random from 'lodash.random';
import {FPS} from "../constants";
import {Events} from "./EventBus";
import EventBus from "./EventBus";
import * as without from 'lodash.without';

function controllTank(tank) {
    this._tank = tank;

    this._shootInterval = 15;
    this._shootTimer = 0;
    this._shootProbability = 0.67;

    this._directionUpdateInterval = 20;
    this._directionTimer = 0;
    this._directionUpdateProbability = 0.6;


    const updateShoot = () => {
        this._shootTimer++;
        if (this._shootTimer >= this._shootInterval) {
            this._shootTimer = 0;
            if (Math.random() < this._shootProbability) {
                this._tank.shoot();
            }
        }
    };

    const updateDirection = () => {
        this._directionTimer++;
        if (this._directionTimer >= this._directionUpdateInterval) {
            this._directionTimer = 0;
            if (Math.random() < this._directionUpdateProbability) {
                const n = Math.random();
                let dir = this._tank.lastEvent;

                const otherDirs = without(
                    [Events.TANK_MOVE_UP, Events.TANK_MOVE_DOWN, Events.TANK_MOVE_LEFT, Events.TANK_MOVE_RIGHT],
                    dir,
                );

                if (n < 0.4) {
                    dir = arrayRandomElement(otherDirs);
                }

                EventBus.reveal(dir, this._tank);
            }
        }
    };

    const update = () => {
        updateShoot();
        updateDirection();
    };

    window.setTimeout(update, 1000/FPS);
}

function arrayRandomElement(array) {
    let index = random(0, array.length-1);
    return array[index];
}
