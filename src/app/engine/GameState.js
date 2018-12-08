import {units} from "../scenarios/scenarios";

export default class GameState {
    next() {
        units.forEach((unit) => {
           unit.act();
        });
        // iterate over active units
            // emit their intents
        // TODO: what with intents?

        // check if collision exist
            // emit collision events // or replace this events with collision events

        // resolve collisions
    }
}
