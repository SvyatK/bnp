import {units, mapItems} from "../scenarios/scenarios";
import EventBus from "./EventBus";
import {TILE_PX} from "../constants";

export default class GameState {
    next() {

        // ===  resolve conflicts

        // check if collision exist
        EventBus._queue.forEach((ent) => {
            if (/MOVE/.test(ent.eventName)) {

                let canSendEvent = true;
                units.forEach((unit) => {
                        if(unit.key !== ent.object.key){
                            if (isIntersects(unit, ent.object)){
                                canSendEvent = false;
                            }
                        }
                    });
                mapItems.forEach((mapItem) => {
                    if (!mapItem.isCrossable) {
                        if( isIntersects(mapItem, ent.object)){
                            canSendEvent = false;
                        }
                    }
                });

                if(canSendEvent){
                    ent.object.act(ent.eventName);
                }else{
                    ent.object.adjustCoordinates(ent.eventName);
                }
            }
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
