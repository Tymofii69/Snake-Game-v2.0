import { snakeIntersection, snakeHead, update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js"
import { update as updateRedFood, draw as drawRedFood } from "./redfood.js"
import { outOfGrid } from "./grid.js"

let lastTimeOfRender: number;
const gameBoard = document.getElementById("game-board") as HTMLElement
let gameOver: boolean;

function main(currentTime: number) {
    if (gameOver) {
        if (confirm("You lost! Press ok to restart.")) {
            window.location.href = "/Snake%20Game%20v2.0/public/";
        }
        return
    }

    window.requestAnimationFrame(main);
    let secondsSinceLastRender = (currentTime - lastTimeOfRender) / 1000;

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastTimeOfRender = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main);


function update() {
    updateSnake();
    updateFood();
    updateRedFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
    drawRedFood(gameBoard);
}

function checkDeath() {
    return gameOver = outOfGrid(snakeHead()) || snakeIntersection();
}