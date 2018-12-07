import Road from '../engine/road';
import Bridge from '../engine/bridge';
import Wall from '../engine/wall';
import Water from '../engine/water';
import Route from '../routes/route';
import main from '../main';
import * as PIXI from 'pixi.js';
import * as Constants from '../constants.js';
import Unit from "../engine/unit";

const mapItems = [];
const units = [];

function onNavigation(){
    if (Route.getPage().includes('scenario')) {
        getLevelData(Route.getPage().split("/")[1]);
    }
}

window.addEventListener('hashchange', onNavigation, false);

function getLevelData(level) {
    fetch(`/stages/${level}/map.json`)
        .then(response => response.json())
        .then((data) => {
            const result = [];
            for (let i = 0; i < data.scheme.length; i++) {
                const row = data.scheme[i];
                for (let j = 0; j < row.length; j++) {
                    const item = row[j];
                    switch (item) {
                        case '0':{
                            const road = new Road();
                            road.setCoordinates((j % 13) * Constants.TILE_PX, i * Constants.TILE_PX);
                            mapItems.push(road);
                            break;
                        }
                        case 'w':{
                            const wall = new Wall();
                            wall.setCoordinates((j % 13) * Constants.TILE_PX, i * Constants.TILE_PX);
                            mapItems.push(wall);
                            break;
                        }
                        case 'r':{
                            const water = new Water();
                            water.setCoordinates((j % 13) * Constants.TILE_PX, i * Constants.TILE_PX);
                            mapItems.push(water);
                            break;
                        }
                        case 'b':{
                            const bridge = new Bridge();
                            bridge.setCoordinates((j % 13) * Constants.TILE_PX, i * Constants.TILE_PX);
                            mapItems.push(bridge);
                            break;
                        }
                    }
                }
            }

            main.stage.removeChildren();

            for (const resultItem of mapItems) {
                const texture = PIXI.Texture.fromImage(resultItem.getImgSource());

                const graphicItem = new PIXI.Sprite(texture);
                graphicItem.x = Constants.TILE_PX + resultItem.getPosX();
                graphicItem.y = Constants.TILE_PX + resultItem.getPosY();
                graphicItem.height = Constants.TILE_PX;
                graphicItem.width = Constants.TILE_PX;
                main.stage.addChild(graphicItem);
            }
            fetch(`/stages/${level}/units.json`)
                .then(response => response.json())
                .then((data) => {
                    for (const item of data) {
                        const unit = new Unit();
                        unit.setCoordinates(item.posX * Constants.TILE_PX, item.posY * Constants.TILE_PX);

                        const texture = PIXI.Texture.fromImage(unit.getImgSource());
                        const graphicItem = new PIXI.Sprite(texture);
                        graphicItem.x = Constants.TILE_PX + unit.getPosX();
                        graphicItem.y = Constants.TILE_PX + unit.getPosY();
                        graphicItem.height = Constants.TILE_PX;
                        graphicItem.width = Constants.TILE_PX;
                        units.push(unit);
                        main.stage.addChild(graphicItem);
                    }
                });
        });


}
