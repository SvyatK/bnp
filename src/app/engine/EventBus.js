//TODO: import rxjs ??? // npm install rxjs

const EventBus = {
    _queue: [],

    reveal(eventName, object) {
        const event = {
            eventName,
            object, // tank
        };
        this._queue.push(event);
    },

    playerReveal(eventName, object) {
        const event = {
            eventName,
            object
        };
        this._queue.push(event);
    }
};

export default EventBus;

export const Events = {
    TANK_MOVE_UP: 'Tank.Event.TANK_MOVE_UP',
    TANK_MOVE_DOWN: 'Tank.Event.TANK_MOVE_DOWN',
    TANK_MOVE_LEFT: 'Tank.Event.TANK_MOVE_LEFT',
    TANK_MOVE_RIGHT: 'Tank.Event.TANK_MOVE_RIGHT',
    FIRE: 'Shell.Event.SHELL_CREATE',
    SHELL_MOVE_UP: 'Shell.Event.SHELL_MOVE_UP',
    SHELL_MOVE_DOWN: 'Shell.Event.SHELL_MOVE_DOWN',
    SHELL_MOVE_LEFT: 'Shell.Event.SHELL_MOVE_LEFT',
    SHELL_MOVE_RIGHT: 'Shell.Event.SHELL_MOVE_RIGHT',
};
