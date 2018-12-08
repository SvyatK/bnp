import {units} from "../scenarios/scenarios";
import EventBus from "./EventBus";
import {TILE_PX} from "../constants";
import * as pull from 'lodash.pull';

export default class GameState {
    next() {
        units.forEach((unit) => {
           unit.randomIntent();
        });

        // ===  resolve conflicts

        // check if collision exist
        const moveEvents = EventBus._queue.filter(intent => /MOVE/.test(intent.eventName));
        EventBus._queue.forEach((intent) => {
            if (/MOVE/.test(intent.eventName)) {
                moveEvents
                    .filter((innt) => {
                        return innt.object !== intent.object;
                    })
                    .filter((innt) => {
                        return isIntersects(innt.object, intent.object);
                    })
                    .forEach((innt) => {
                        // resolve collisions
                        pull(EventBus._queue, innt); // https://lodash.com/docs/4.17.11#pull
                    });
            }
        });

        // fulfill intents
        EventBus._queue.forEach((intent) => {
            intent.object.act(intent.eventName);
        });
        EventBus._queue = [];
    }
}

function isIntersects ( a, b ) {
    const ax = a.posX;
    const ax1 = a.posX+TILE_PX;
    const ay = a.posY;
    const ay1 = a.posY+TILE_PX;
    const bx = b.posX;
    const bx1 = b.posX+TILE_PX;
    const by = b.posY;
    const by1 = b.posY+TILE_PX;

    return ( ay < by1 || ay1 > by || ax1 < bx || ax > bx1 );
}

// (a.x,a.y)--------------|
//    |                   |
//    |                   |
//    |                   |
//    |---------------(a.x1,a.y1)
//
//        (b.x,b.y)---------------------|
//           |                          |
//           |                          |
//           |                          |
//           |---------------------(b.x1,b.y1)
