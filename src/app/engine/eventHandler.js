
const eventHandler = {
    _queue: [],

    handle(event) {
        event.object.act(event.eventName);
    },
};

export default eventHandler;
