import { units, shells } from "../scenarios/scenarios";
import EventBus, {Events} from "../engine/EventBus";
import Shell from '../engine/shell';
import { SHELL_RELOAD_SPEED } from '../constants';

let player1Timer = false;

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
                if (unit.key.includes('player1') && !player1Timer){
                    const currentShell = new Shell(unit);
                    shells.push(currentShell);
                    EventBus.playerReveal(unit.getLastEvent(), currentShell);
                    currentShell.run();
                    player1Timer = true;
                    setTimeout(() => { player1Timer = false }, SHELL_RELOAD_SPEED);
                }
            });
            
            break;
        }
        default:
            console.warn('default');
            break;
    }
});
