import * as PIXI from 'pixi.js';
import basePic from '../img/base.png';

const main = new PIXI.Application(800, 600, {backgroundColor : 0x000000});
const base = PIXI.Sprite.fromImage(basePic);

main.stage.addChild(base);

export default main;
