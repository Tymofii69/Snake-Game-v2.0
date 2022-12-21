import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
export const GROW_RATE = 5;
let food = getRandomPosition();
export let score = 0;
export function update() {
    if (onSnake(food)) {
        expandSnake(GROW_RATE);
        food = getRandomPosition();
        addPoints(GROW_RATE);
        document.getElementById("score").innerHTML = score.toString();
    }
}
export function draw(gameBoard) {
    const div = document.createElement("div");
    div.style.gridRowStart = food.y.toString();
    div.style.gridColumnStart = food.x.toString();
    div.classList.add("food");
    gameBoard.appendChild(div);
}
export function addPoints(points) {
    score += points;
}
function getRandomPosition() {
    let newPosition;
    while (newPosition == null || onSnake(newPosition)) {
        newPosition = randomGridPosition();
    }
    return newPosition;
}
