import {units} from "../scenarios/scenarios";
import EventBus, {Events} from "../engine/EventBus";

window.addEventListener('keydown', (event) => {

    if (event.code === 'ArrowUp'
        || event.code === 'ArrowDown'
        || event.code === 'ArrowLeft'
        || event.code === 'ArrowRight') {
        event.preventDefault();
    }

    switch (event.code) {
        case 'ArrowUp': {
            units.forEach((unit) => {
                if (unit.key.includes('player1')) {
                    EventBus.playerReveal(Events.TANK_MOVE_UP, unit);
                }
            });
            break;
        }
        case 'ArrowDown': {
            units.forEach((unit) => {
                if (unit.key.includes('player1')) {
                    EventBus.playerReveal(Events.TANK_MOVE_DOWN, unit);
                }
            });

            break;
        }
        case 'ArrowLeft': {
            units.forEach((unit) => {
                if (unit.key.includes('player1')) {
                    EventBus.playerReveal(Events.TANK_MOVE_LEFT, unit);
                }
            });

            break;
        }
        case 'ArrowRight': {
            units.forEach((unit) => {
                if (unit.key.includes('player1')) {
                    EventBus.playerReveal(Events.TANK_MOVE_RIGHT, unit);
                }
            });

            break;
        }
    }
});
