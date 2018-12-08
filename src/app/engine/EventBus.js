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

    playerReveal(eventName) {
        console.warn(eventName);
    }
};

export default EventBus;

export const Events = {
    TANK_MOVE_UP: 'Tank.Event.TANK_MOVE_UP',
    TANK_MOVE_DOWN: 'Tank.Event.TANK_MOVE_DOWN',
    TANK_MOVE_LEFT: 'Tank.Event.TANK_MOVE_LEFT',
    TANK_MOVE_RIGHT: 'Tank.Event.TANK_MOVE_RIGHT',
};
