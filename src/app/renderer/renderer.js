import * as PIXI from "pixi.js";
import * as Constants from "../constants";
import main from "../main";
import {mapItems, units, shells} from "../scenarios/scenarios";
import {Events} from "../engine/EventBus";
// import Route from "../routes/route";

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

            const red = 0xc0392b;
            const blackAlmost = 0x2c3e50;
            const yellow = 0xf1c40f;

            //armor bar
            let graphics = new PIXI.Graphics();
            graphics.beginFill(blackAlmost, 1);// armor border color
            graphics.drawRect(second ? Constants.GAME_X_PX - 150 : 50, Constants.BATTLE_FIELD_Y_PX + 45, 100, 10);
            graphics.endFill();
            main.stage.addChild(graphics);
            graphics = new PIXI.Graphics();
            graphics.beginFill(red, 1); // armor fill color
            graphics.drawRect(second ? Constants.GAME_X_PX - 150 : 50, Constants.BATTLE_FIELD_Y_PX + 45, second ? 50 : 75, 10); // unit.getArmour() * 10
            graphics.endFill();
            main.stage.addChild(graphics);

            //reload bar
            graphics = new PIXI.Graphics();
            graphics.beginFill(blackAlmost, 1); // reload border color
            graphics.drawRect(second ? Constants.GAME_X_PX - 150 : 50, Constants.BATTLE_FIELD_Y_PX + 70, 100, 10); // unit.getReloadDuration() / 10
            graphics.endFill();
            main.stage.addChild(graphics);
            graphics = new PIXI.Graphics();
            graphics.beginFill(yellow, 1); // reload fill color
            graphics.drawRect(second ? Constants.GAME_X_PX - 150 : 50, Constants.BATTLE_FIELD_Y_PX + 70, second ? 70 : 85, 10);
            graphics.endFill();
            main.stage.addChild(graphics);

            texture = PIXI.Texture.fromImage(unit.getImgSource());
            const graphicItem = new PIXI.Sprite(texture);
            graphicItem.anchor.set(1);
            graphicItem.rotation = -Math.PI/2;
            graphicItem.x = second ? Constants.GAME_X_PX - 160 : 200;
            graphicItem.y = Constants.BATTLE_FIELD_Y_PX + 45;
            graphicItem.height = Constants.TILE_PX;
            graphicItem.width = Constants.TILE_PX;
            main.stage.addChild(graphicItem);

            // if (Route.getPage().includes('scenario')) {
            //     const style = new PIXI.TextStyle({
            //         fontFamily: 'monospace',
            //         fontSize: 72,
            //         fontWeight: 'bold',
            //         fill: ['#555555', '#555555'], // gradient
            //         // stroke: '#4a1850',
            //         // strokeThickness: 5,
            //     });
            //     const level = Route.getPage().split('/')[1];
            //
            //     const richText = new PIXI.Text(level.toString(), style);
            //     richText.x = 277;
            //     richText.y = 590;
            //
            //     main.stage.addChild(richText);
            // }
        }
    });
}


function renderShells(shellArray) {
    shellArray.forEach((shell) => {
        const texture = PIXI.Texture.fromImage(shell.getImgSource());
        const graphicItem = new PIXI.Sprite(texture);
        graphicItem.x = Constants.TILE_PX + shell.getPosX();
        graphicItem.y = shell.getPosY();
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
