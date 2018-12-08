import {reRender} from "../renderer/renderer";
import GameState from "./GameState";

const gameState = new GameState();

export let requestAnimationFrameId;

export function gameLoop() {
    gameState.next();
    reRender();

    requestAnimationFrameId = requestAnimationFrame(gameLoop);
}
