//TODO: import rxjs ??? // npm install rxjs

const EventBus = {
    _queue: [],
    Events: {
        TANK_MOVE_UP: 'Tank.Event.TANK_MOVE_UP',
        TANK_MOVE_DOWN: 'Tank.Event.TANK_MOVE_DOWN',
        TANK_MOVE_LEFT: 'Tank.Event.TANK_MOVE_LEFT',
        TANK_MOVE_RIGHT: 'Tank.Event.TANK_MOVE_RIGHT',
    },

    reveal(event) {
        console.log(this);
        console.log(event);
        this._queue.push(event);
    },
};

export default EventBus;
