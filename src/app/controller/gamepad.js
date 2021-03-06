import EventBus, {Events} from "../engine/EventBus";
import { units, shells } from "../scenarios/scenarios";
import Shell from '../engine/shell';
import { SHELL_RELOAD_SPEED } from '../constants';

const gamepads = [];
let player1Timer = false;
let player2Timer = false;

window.addEventListener("gamepadconnected", function(e) {
    const gp = navigator.getGamepads()[e.gamepad.index];
    // make sure that we do not add mouse and keyboard
    if (gp.buttons.length > 10) {
        gamepads.push(gp);
        if (gamepads.length === 1) {
            enableButtonHandling();
        }
    }
    console.log("Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");
});

function buttonPressed(b) {
    if (typeof(b) === "object") {
        return b.pressed;
    }
    return b === 1.0;
}


function processCustomController(gamepad){
    if (gamepad.axes[1] === -1) {
        units.forEach((unit) => {
            if (unit.key.includes('player2')){
                EventBus.playerReveal(Events.TANK_MOVE_UP, unit);
            }
        });
    }
    if (gamepad.axes[1] === 1) {
        units.forEach((unit) => {
            if (unit.key.includes('player2')){
                EventBus.playerReveal(Events.TANK_MOVE_DOWN, unit);
            }
        });
    }
    if (gamepad.axes[0] === -1) {
        units.forEach((unit) => {
            if (unit.key.includes('player2')){
                EventBus.playerReveal(Events.TANK_MOVE_LEFT, unit);
            }
        });
    }
    if (gamepad.axes[0] === 1) {
        units.forEach((unit) => {
            if (unit.key.includes('player2')){
                EventBus.playerReveal(Events.TANK_MOVE_RIGHT, unit);
            }
        });
    }
    if (buttonPressed(gamepad.buttons[0])) {
        console.log('click y');
    }
    if (buttonPressed(gamepad.buttons[3])) {
        console.log('click x');
    }
    if (buttonPressed(gamepad.buttons[2])) {
        console.log('click a');
        units.forEach((unit) => {
            if (unit.key.includes('player2') && !unit.isDead && !player2Timer){
                const currentShell = new Shell(unit);
                shells.push(currentShell);
                EventBus.playerReveal(unit.getLastEvent(), currentShell);
                currentShell.run();
                player2Timer = true;
                setTimeout(() => { player2Timer = false }, SHELL_RELOAD_SPEED);
            }
        });
    }
    if (buttonPressed(gamepad.buttons[1])) {
        console.log('click b');
    }
}

function processStandardController(gamepad){
    if (buttonPressed(gamepad.buttons[12])) {
        units.forEach((unit) => {
            if (unit.key.includes('player1')){
                EventBus.playerReveal(Events.TANK_MOVE_UP, unit);
            }
        });
    }
    if (buttonPressed(gamepad.buttons[13])) {
        units.forEach((unit) => {
            if (unit.key.includes('player1')){
                EventBus.playerReveal(Events.TANK_MOVE_DOWN, unit);
            }
        });
    }
    if (buttonPressed(gamepad.buttons[14])) {
        units.forEach((unit) => {
            if (unit.key.includes('player1')){
                EventBus.playerReveal(Events.TANK_MOVE_LEFT, unit);
            }
        });
    }
    if (buttonPressed(gamepad.buttons[15])) {
        units.forEach((unit) => {
            if (unit.key.includes('player1')){
                EventBus.playerReveal(Events.TANK_MOVE_RIGHT, unit);
            }
        });
    }
    if (buttonPressed(gamepad.buttons[3])) {
        console.log('click y');
    }
    if (buttonPressed(gamepad.buttons[2])) {
        console.log('click x');
    }
    if (buttonPressed(gamepad.buttons[0])) {
        console.log('click a');
        units.forEach((unit) => {
            if (unit.key.includes('player1') && !unit.isDead && !player1Timer){
                const currentShell = new Shell(unit);
                shells.push(currentShell);
                EventBus.playerReveal(unit.getLastEvent(), currentShell);
                currentShell.run();
                player1Timer = true;
                setTimeout(() => { player1Timer = false }, SHELL_RELOAD_SPEED);
            }
        });
    }
    if (buttonPressed(gamepad.buttons[1])) {
        console.log('click b');
    }
}

function enableButtonHandling() {
    //refresh gamepads
    navigator.getGamepads();

    for (const gp of gamepads) {
        if (gp.mapping === 'standard') {
            processStandardController(gp);
        } else {
            processCustomController(gp);
        }
    }

    requestAnimationFrame(enableButtonHandling);
}

