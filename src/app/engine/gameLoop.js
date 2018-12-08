import {rerender} from "../renderer/renderer";
import GameState from "./GameState";

const gameState = new GameState();

export let requestAnimationFrameId = null;

export function gameLoop() {
    gameState.next();
    rerender();

    requestAnimationFrameId = requestAnimationFrame(gameLoop);
}
