import {units, mapItems, shells} from "../scenarios/scenarios";
import EventBus from "./EventBus";
import {TILE_PX} from "../constants";

export default class GameState {
    next() {

        // ===  resolve conflicts

        // check if collision exist
        EventBus._queue.forEach((ent) => {
            if (/MOVE/.test(ent.eventName)) {

                let itemForUpdate = null;
                let canSendEvent = true;
                units.forEach((unit) => {
                        if(unit.key !== ent.object.key){
                            if (isIntersects(unit, ent.object)){
                                console.log('isIntersects unit', unit);
                                itemForUpdate = unit;
                                canSendEvent = false;
                            }
                        }
                    });
                for (let i = 0; i < mapItems.length; i++){
                    let mapItem = mapItems[i];
                    if (!mapItem.isCrossable) {
                        if( isIntersects(mapItem, ent.object)){
                            itemForUpdate = mapItem;
                            canSendEvent = false;
                            break;
                        }
                    }
                }
                shells.forEach((shell) => {
                    if(shell.key !== ent.object.key){
                        if (isIntersectsShell(shell, ent.object)){
                            console.log('isIntersects shell', JSON.stringify(shell));
                            console.log('isIntersects ent.object', JSON.stringify(ent.object));
                            //itemForUpdate = shell;
                            canSendEvent = false;
                            ent.object.setImgSource('/images/frags.png');
                            ent.object.isDead = true;
                            
                            return;
                        }
                    }
                });
                if(canSendEvent){
                    ent.object.act(ent.eventName);
                }else{
                    if(itemForUpdate){
                        ent.object.adjustCoordinates(ent.eventName, itemForUpdate);
                    }
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
    const ax = a.posX+2;
    const ax1 = a.posX+TILE_PX-2;
    const ay = a.posY+2;
    const ay1 = a.posY+TILE_PX-2;
    const bx = b.posX+2;
    const bx1 = b.posX+TILE_PX-2;
    const by = b.posY+2;
    const by1 = b.posY+TILE_PX-2;

    return !(ax1 <= bx || bx1 <= ax || ay1 <= by || by1 <= ay);
}

function isIntersectsShell ( a, b ) {
    const ax = a.posX+2;
    const ax1 = a.posX+TILE_PX/5;
    const ay = a.posY+2;
    const ay1 = a.posY+TILE_PX/5;
    const bx = b.posX+2;
    const bx1 = b.posX+TILE_PX-2;
    const by = b.posY+2;
    const by1 = b.posY+TILE_PX-2;

    return !(ax1 <= bx || bx1 <= ax || ay1 <= by || by1 <= ay);
}