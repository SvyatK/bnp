import {reRender} from "../renderer/renderer";
import GameState from "./GameState";
import {FPS} from "../constants";

const gameState = new GameState();

export let requestAnimationFrameId;

export function gameLoop() {
    gameState.next();
    reRender();

    requestAnimationFrameId = setTimeout(gameLoop, 1000/FPS);
}
