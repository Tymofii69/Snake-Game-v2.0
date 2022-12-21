import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js";
import { addPoints , score } from "./food.js"

export const GROW_RATE = 1;
let food: coordinate = getRandomPosition();

export function update() {
    if (onSnake(food)) {
        expandSnake(GROW_RATE);
        food = getRandomPosition();
        addPoints(GROW_RATE * 20);
        document.getElementById("score")!.innerHTML = score.toString();
    }
}   


export function draw(gameBoard: HTMLElement) {
        const div = document.createElement("div");
        div.style.gridRowStart = food.y.toString();
        div.style.gridRowEnd = (food.y + 1).toString();
        div.style.gridColumnStart = food.x.toString();
        div.style.gridColumnEnd = (food.x + 1).toString();
        div.classList.add("red-food");
        gameBoard.appendChild(div);
}

function getRandomPosition(): coordinate{
    let newPosition;
    while (newPosition == null || onSnake(newPosition)) {
        newPosition = [{ ...randomGridPosition() }, ];
    }
    return newPosition;
}

