import Road from '../engine/road';
import Bridge from '../engine/bridge';
import Wall from '../engine/wall';
import Water from '../engine/water';
import Route from '../routes/route';
import * as Constants from '../constants.js';
import * as Render from "../renderer/renderer";
import Tank from "../engine/tank";
import stages from '../stages/stages';

export let mapItems = [];
export let units = [];
export let player1 = null;
export let player2 = null;

function onNavigation(){
    if (Route.getPage().includes('scenario')) {
        getLevelData(Route.getPage().split("/")[1]);
    }
}

window.addEventListener('hashchange', onNavigation, false);

onNavigation();

function getLevelData(level) {
    const {map: stageMap, units: stageUnits} = stages.get(level);
    console.log(stages);

    mapItems = [];
    for (let i = 0; i < stageMap.scheme.length; i++) {
        const row = stageMap.scheme[i];
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

    units = [];
    for (const item of stageUnits) {
        const tank = new Tank();
        tank.setKey(item.key);
        tank.setImgSource(item.imgSource);
        tank.setReloadDuration(item.reloadDuration);
        tank.setDamage(item.damage.min, item.damage.max);
        tank.setAccuracy(item.accuracy);
        tank.setAmmo(item.ammo);
        tank.setArmour(item.armour);
        tank.setSpeed(item.speed);
        tank.setCoordinates(item.posX * Constants.TILE_PX, item.posY * Constants.TILE_PX);
        units.push(tank);
    }
    Render.reRender();
}
