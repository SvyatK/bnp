import * as PIXI from "pixi.js";
import * as Constants from "../constants";
import main from "../main";
import {mapItems, units, shells} from "../scenarios/scenarios";
import {Events} from "../engine/EventBus";

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

        switch (unit.lastEvent) {
            case Events.TANK_MOVE_UP: {
                graphicItem.anchor.set(1, 0);
                graphicItem.rotation = -Math.PI/2;
                break;
            }
            case Events.TANK_MOVE_DOWN: {
                graphicItem.anchor.set(0, 1);
                graphicItem.rotation = Math.PI/2;
                break;
            }
            case Events.TANK_MOVE_LEFT: {
                graphicItem.anchor.set(1, 1);
                graphicItem.rotation = Math.PI;
                break;
            }
            default:
                break;
        }

        graphicItem.x = Constants.TILE_PX + unit.getPosX();
        graphicItem.y = unit.getPosY();
        graphicItem.height = Constants.TILE_PX;
        graphicItem.width = Constants.TILE_PX;
        main.stage.addChild(graphicItem);
    });
}

function renderHUD(unitArray) {
    unitArray.forEach((unit) => {
        if (unit.key.includes('player')) {
            const second = unit.key.includes('2');
            //ammo icon
            let texture = PIXI.Texture.fromImage('/images/ammo.png');
            let icon = new PIXI.Sprite(texture);
            icon.x = second ? Constants.GAME_X_PX - 40 : 20;
            icon.y = Constants.BATTLE_FIELD_Y_PX + 15;
            icon.height = 20;
            icon.width = 20;
            main.stage.addChild(icon);

            //armor icon
            texture = PIXI.Texture.fromImage('/images/armour.png');
            icon = new PIXI.Sprite(texture);
            icon.x = second ? Constants.GAME_X_PX - 40 : 20;
            icon.y = Constants.BATTLE_FIELD_Y_PX + 40;
            icon.height = 20;
            icon.width = 20;
            main.stage.addChild(icon);

            //reload icon
            texture = PIXI.Texture.fromImage('/images/reload.png');
            icon = new PIXI.Sprite(texture);
            icon.x = second ? Constants.GAME_X_PX - 40 : 20;
            icon.y = Constants.BATTLE_FIELD_Y_PX + 65;
            icon.height = 20;
            icon.width = 20;
            main.stage.addChild(icon);

            //currency icon
            texture = PIXI.Texture.fromImage('/images/bitcoin.png');
            icon = new PIXI.Sprite(texture);
            icon.x = second ? Constants.GAME_X_PX - 90 : 70;
            icon.y = Constants.BATTLE_FIELD_Y_PX + 15;
            icon.height = 20;
            icon.width = 20;
            main.stage.addChild(icon);

            //frags icon
            texture = PIXI.Texture.fromImage('/images/frags.png');
            icon = new PIXI.Sprite(texture);
            icon.x = second ? Constants.GAME_X_PX - 140 : 120;
            icon.y = Constants.BATTLE_FIELD_Y_PX + 15;
            icon.height = 20;
            icon.width = 20;
            main.stage.addChild(icon);

            const style = new PIXI.TextStyle({
                fontSize: 12,
                fill: '#ffffff'
            });

            //ammo
            let text = new PIXI.Text(unit.getAmmo(), style);
            text.x = second ? Constants.GAME_X_PX - 55 : 45;
            text.y = Constants.BATTLE_FIELD_Y_PX + 17;
            main.stage.addChild(text);

            //currency
            text = new PIXI.Text(unit.getBitcoin(), style);
            text.x = second ? Constants.GAME_X_PX - 105 : 95;
            text.y = Constants.BATTLE_FIELD_Y_PX + 17;
            main.stage.addChild(text);

            //frags
            text = new PIXI.Text(unit.getFrags(), style);
            text.x = second ? Constants.GAME_X_PX - 155 : 145;
            text.y = Constants.BATTLE_FIELD_Y_PX + 17;
            main.stage.addChild(text);

            //armor bar
            let graphics = new PIXI.Graphics();
            graphics.lineStyle(2, 0x0000FF, 1);
            graphics.beginFill(0xFF700B, 1);
            graphics.drawRect(second ? Constants.GAME_X_PX - 150 : 50, Constants.BATTLE_FIELD_Y_PX + 45, 100, 10);
            graphics.endFill();
            main.stage.addChild(graphics);
            graphics = new PIXI.Graphics();
            graphics.beginFill(0x00700B, 1);
            graphics.drawRect(second ? Constants.GAME_X_PX - 150 : 50, Constants.BATTLE_FIELD_Y_PX + 45, unit.getArmour() * 10, 10);
            graphics.endFill();
            main.stage.addChild(graphics);

            //reload bar
            graphics = new PIXI.Graphics();
            graphics.lineStyle(2, 0x0000FF, 1);
            graphics.beginFill(0xFF00FF, 1);
            graphics.drawRect(second ? Constants.GAME_X_PX - 150 : 50, Constants.BATTLE_FIELD_Y_PX + 70, 100, 10);
            graphics.endFill();
            main.stage.addChild(graphics);
            graphics = new PIXI.Graphics();
            graphics.beginFill(0xFFff00, 1);
            graphics.drawRect(second ? Constants.GAME_X_PX - 150 : 50, Constants.BATTLE_FIELD_Y_PX + 70, unit.getReloadDuration() / 10, 10);
            graphics.endFill();
            main.stage.addChild(graphics);

            texture = PIXI.Texture.fromImage(unit.getImgSource());
            const graphicItem = new PIXI.Sprite(texture);
            graphicItem.anchor.set(1);
            graphicItem.rotation = -Math.PI/2;
            graphicItem.x = second ? Constants.GAME_X_PX - 160 : 190;
            graphicItem.y = Constants.BATTLE_FIELD_Y_PX + 45;
            graphicItem.height = Constants.TILE_PX;
            graphicItem.width = Constants.TILE_PX;
            main.stage.addChild(graphicItem);
        }
    });
}


function renderShells(shellArray) {
    shellArray.forEach((shell) => {
        const texture = PIXI.Texture.fromImage(shell.getImgSource());
        const graphicItem = new PIXI.Sprite(texture);
        graphicItem.x = Constants.TILE_PX + shell.getPosX();
        graphicItem.y = shell.getPosY();
        graphicItem.height = Constants.TILE_PX/2;
        graphicItem.width = Constants.TILE_PX/2;
        main.stage.addChild(graphicItem);
    });
}

export function reRender() {
    main.stage.removeChildren();
    renderEnvironment(mapItems);
    renderUnits(units);
    renderHUD(units);
    renderShells(shells);
}
