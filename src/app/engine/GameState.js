import {units} from "../scenarios/scenarios";
import EventBus from "./EventBus";
import eventHandler from "./eventHandler";

export default class GameState {
    next() {
        units.forEach((unit) => {
           unit.randomIntent();
        });

        EventBus._queue.forEach((intent) => {
            // check if collision exist
            // resolve collisions
            eventHandler.handle(intent);
        });

        // state changed
    }
}
