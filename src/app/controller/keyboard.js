import {units} from "../scenarios/scenarios";
import EventBus, {Events} from "../engine/EventBus";

window.addEventListener('keydown', (event) => {

    if (event.code === 'ArrowUp'
        || event.code === 'ArrowDown'
        || event.code === 'ArrowLeft'
        || event.code === 'ArrowRight'
        || event.code === 'Space') {
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
        case 'Space': {
            units.forEach((unit) => {
                if (unit.key.includes('player1')) {
                    EventBus.playerReveal(Event.FIRE, unit);
                }
            });
            
            break;
        }
        default:
            console.warn('default');
            break;
    }
});
