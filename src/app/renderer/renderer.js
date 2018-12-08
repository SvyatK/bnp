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

function createPlayerHud(second = false){
    //ammo icon
    let texture = PIXI.Texture.fromImage('/images/default.gif');
    let icon = new PIXI.Sprite(texture);
    icon.x = second ? Constants.GAME_X_PX - 40 : 20;
    icon.y = Constants.BATTLE_FIELD_Y_PX + 15;
    icon.height = 20;
    icon.width = 20;
    main.stage.addChild(icon);

    //armor icon
    texture = PIXI.Texture.fromImage('/images/default.gif');
    icon = new PIXI.Sprite(texture);
    icon.x = second ? Constants.GAME_X_PX - 40 : 20;
    icon.y = Constants.BATTLE_FIELD_Y_PX + 40;
    icon.height = 20;
    icon.width = 20;
    main.stage.addChild(icon);

    //reload icon
    texture = PIXI.Texture.fromImage('/images/default.gif');
    icon = new PIXI.Sprite(texture);
    icon.x = second ? Constants.GAME_X_PX - 40 : 20;
    icon.y = Constants.BATTLE_FIELD_Y_PX + 65;
    icon.height = 20;
    icon.width = 20;
    main.stage.addChild(icon);

    //currency icon
    texture = PIXI.Texture.fromImage('/images/default.gif');
    icon = new PIXI.Sprite(texture);
    icon.x = second ? Constants.GAME_X_PX - 110 : 90;
    icon.y = Constants.BATTLE_FIELD_Y_PX + 15;
    icon.height = 20;
    icon.width = 20;
    main.stage.addChild(icon);

    //frags icon
    texture = PIXI.Texture.fromImage('/images/default.gif');
    icon = new PIXI.Sprite(texture);
    icon.x = second ? Constants.GAME_X_PX - 180 : 160;
    icon.y = Constants.BATTLE_FIELD_Y_PX + 15;
    icon.height = 20;
    icon.width = 20;
    main.stage.addChild(icon);
}

function renderHUD(unitArray) {
    unitArray.forEach((unit) => {
        if (unit.key === 'player1') {
            createPlayerHud();
        }else if (unit.key === 'player2') {
            createPlayerHud(true);
        }
    });
}

export function rerender() {
    main.stage.removeChildren();
    renderEnvironment(mapItems);
    renderUnits(units);
    renderHUD(units)
}
