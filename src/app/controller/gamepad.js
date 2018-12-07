console.log('gamepad');
const gamepads = [];

window.addEventListener("gamepadconnected", function(e) {
    var gp = navigator.getGamepads()[e.gamepad.index];
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
        console.log('click up');
    }
    if (gamepad.axes[1] === 1) {
        console.log('click down');
    }
    if (gamepad.axes[0] === -1) {
        console.log('click left');
    }
    if (gamepad.axes[0] === 1) {
        console.log('click right');
    }
    if (buttonPressed(gamepad.buttons[0])) {
        console.log('click y');
    }
    if (buttonPressed(gamepad.buttons[3])) {
        console.log('click x');
    }
    if (buttonPressed(gamepad.buttons[2])) {
        console.log('click a');
    }
    if (buttonPressed(gamepad.buttons[1])) {
        console.log('click b');
    }
}

function processStandardController(gamepad){
    if (buttonPressed(gamepad.buttons[12])) {
        console.log('click up');
    }
    if (buttonPressed(gamepad.buttons[13])) {
        console.log('click down');
    }
    if (buttonPressed(gamepad.buttons[14])) {
        console.log('click left');
    }
    if (buttonPressed(gamepad.buttons[15])) {
        console.log('click right');
    }
    if (buttonPressed(gamepad.buttons[3])) {
        console.log('click y');
    }
    if (buttonPressed(gamepad.buttons[2])) {
        console.log('click x');
    }
    if (buttonPressed(gamepad.buttons[0])) {
        console.log('click a');
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

