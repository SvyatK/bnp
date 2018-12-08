import { units, shells } from "../scenarios/scenarios";
import EventBus, {Events} from "../engine/EventBus";
import Shell from '../engine/shell';

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
                    units.forEach((unit) => {
                        if (unit.key.includes('player1')){
                            const direction = unit.getLastEvent();
                            const currentShell = new Shell(direction);
                            currentShell.setPosX(unit.getPosX());
                            currentShell.setPosY(unit.getPosY());
                            shells.push(currentShell);
                            EventBus.playerReveal(direction, currentShell);
                        }
                    });
                    EventBus.playerReveal(unit.getLastEvent(), unit);
                }
            });
            
            break;
        }
        default:
            console.warn('default');
            break;
    }
});
