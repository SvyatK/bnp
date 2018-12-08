import {units} from "../scenarios/scenarios";
import EventBus from "./EventBus";
import eventHandler from "./eventHandler";

export default class GameState {
    next() {
        units.forEach((unit) => {
            if (!unit.key.includes('player')){
                //unit.randomIntent();
            }
        });

        EventBus._queue.forEach((event) => {
            // check if collision exist
            // resolve collisions
            event.object.act(event.eventName);
        });

        EventBus._queue = [];

        // state changed
    }
}
