import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js";

export const GROW_RATE = 1;
let food: coordinate = getRandomPosition();
export let score: number = 0;
export let catchedFood = 0;

export function update() {
    if (onSnake(food)) {
        expandSnake(GROW_RATE);
        food = getRandomPosition();
        addPoints(GROW_RATE);
        document.getElementById("score")!.innerHTML = score.toString();
        catchedFood++;
    }
}   


export function draw(gameBoard: HTMLElement) {
        const div = document.createElement("div");
        div.style.gridRowStart = food.y.toString();
        div.style.gridColumnStart = food.x.toString();
        div.classList.add("food");
        gameBoard.appendChild(div);
}

export function addPoints(points: number) {
    score += points; 
}

function getRandomPosition(): coordinate{
    let newPosition;
    while (newPosition == null || onSnake(newPosition)) {
        newPosition = randomGridPosition();
    }
    return newPosition;
}

export function setCatchedFood(value: number){
    catchedFood = value;
}