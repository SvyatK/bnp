import * as PIXI from "pixi.js";
import * as Constants from "../constants";
import main from "../main";
import {mapItems, units} from "../scenarios/scenarios";

function renderEnvironment(items) {
    items.forEach((item) => {
        const texture = PIXI.Texture.fromImage(item.getImgSource());
        const graphicItem = new PIXI.Sprite(texture);
        graphicItem.x = Constants.TILE_PX + item.getPosX();
        graphicItem.y = item.getPosY();
        graphicItem.height = Constants.TILE_PX;
        graphicItem.width = Constants.TILE_PX;
        main.stage.addChild(graphicItem);
    });
}



function renderUnits(unitArray) {
    unitArray.forEach((unit) => {
        const texture = PIXI.Texture.fromImage(unit.getImgSource());
        const graphicItem = new PIXI.Sprite(texture);
        graphicItem.x = Constants.TILE_PX + unit.getPosX();
        graphicItem.y = unit.getPosY();
        graphicItem.height = Constants.TILE_PX;
        graphicItem.width = Constants.TILE_PX;
        main.stage.addChild(graphicItem);
    });
}

export function rerender() {
    main.stage.removeChildren();
    renderEnvironment(mapItems);
    renderUnits(units);
}
