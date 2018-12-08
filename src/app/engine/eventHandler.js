
const eventHandler = {

    handle(event) {
        event.object.act(event.eventName);
    },
};

export default eventHandler;
