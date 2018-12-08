import {units} from "../scenarios/scenarios";
import EventBus from "./EventBus";
import {TILE_PX} from "../constants";
import * as pull from 'lodash.pull';

export default class GameState {
    next() {
        units
            .filter((unit) => {
                return !(/player/.test(unit.key));
            })
            .forEach((unit) => {
               unit.randomIntent();
            });

        // ===  resolve conflicts

        // check if collision exist
        const moveEvents = EventBus._queue.filter(ent => /MOVE/.test(ent.eventName));
        EventBus._queue.forEach((ent) => {
            if (/MOVE/.test(ent.eventName)) {
                moveEvents
                    .filter((innt) => {
                        return innt.object !== ent.object;
                    })
                    .filter((innt) => {
                        return isIntersects(innt.object, ent.object);
                    })
                    .forEach((innt) => {
                        // resolve collisions
                        pull(EventBus._queue, innt, ent); // https://lodash.com/docs/4.17.11#pull
                    });
            }
        });

        // fulfill ents
        EventBus._queue.forEach((ent) => {
            ent.object.act(ent.eventName);
        });
        EventBus._queue = [];
    }
}

//
// +--------------------> X axis
// |
// |    (X,Y)      (X+W, Y)
// |    +--------------+
// |    |              |
// |    |              |
// |    |              |
// |    +--------------+
// v    (X, Y+H)     (X+W,Y+H)
//
// Y axis

function isIntersects ( a, b ) {
    const ax = a.posX;
    const ax1 = a.posX+TILE_PX;
    const ay = a.posY;
    const ay1 = a.posY+TILE_PX;
    const bx = b.posX;
    const bx1 = b.posX+TILE_PX;
    const by = b.posY;
    const by1 = b.posY+TILE_PX;

    return !(ax1 < bx || bx1 < ax || ay1 < by || by1 < ay);
}
