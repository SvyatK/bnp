import * as PIXI from 'pixi.js';
import basePic from '../img/base.png';
import { GAME_X_PX, GAME_Y_PX } from './constants';

const main = new PIXI.Application(GAME_X_PX, GAME_Y_PX, { backgroundColor : 0x000000 });
const base = PIXI.Sprite.fromImage(basePic);

main.stage.addChild(base);

export default main;
