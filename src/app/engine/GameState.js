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
                        return isersects(innt.object, ent.object);
                    })
                    .forEach((innt) => {
                        // resolve collisions
                        pull(EventBus._queue, innt); // https://lodash.com/docs/4.17.11#pull
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

/*
    x1, y1 - левая нижняя точка первого прямоугольника
    x2, y2 - правая верхняя точка первого прямоугольника
    x3, y3 - левая нижняя точка второго прямоугольника
    x4, y4 - правая верхняя точка второго прямоугольника
*/

function isersects(o1, o2) {
    const x1 = o1.posX;
    const y1 = o1.posY+TILE_PX;
    const x2 = o1.posX+TILE_PX;
    const y2 = o1.posY;
    const x3 = o2.posX;
    const y3 = o2.posY+TILE_PX;
    const x4 = o2.posX+TILE_PX;
    const y4 = o2.posY;

    const left = Math.max(x1, x3);
    const top = Math.min(y2, y4);
    const right = Math.min(x2, x4);
    const bottom = Math.max(y1, y3);

    const width = right - left;
    const height = top - bottom;

    return !(width < 0 || height < 0);
}
