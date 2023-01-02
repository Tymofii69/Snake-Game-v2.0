import { expandSnake, onSnake2 } from "./snake.js";
import { randomGridPositionForRedFood } from "./grid.js";
import { addPoints, catchedFood, setCatchedFood, score } from "./food.js";
export const GROW_RATE = 1;
let redFood = [];
let secondsOfCountdown;
let timer;
export function update() {
    if (catchedFood == 5) {
        redFood = getRandomPosition();
        window.setTimeout(function () { redFood = []; }, 3000);
        secondsOfCountdown = 3;
        document.querySelector("h1").innerHTML = secondsOfCountdown.toString();
        timer = setInterval(function () {
            if (secondsOfCountdown == 1) {
                clearInterval(timer);
                document.querySelector("h1").innerHTML = `Score: <span id=\"score\">${score}</span`;
                return;
            }
            secondsOfCountdown--;
            document.querySelector("h1").innerHTML = secondsOfCountdown.toString();
        }, 1000);
        setCatchedFood(0);
    }
    if (onSnake2(redFood)) {
        expandSnake(GROW_RATE);
        redFood = [];
        addPoints(GROW_RATE * 20);
        clearInterval(timer);
        document.querySelector("h1").innerHTML = `Score: <span id=\"score\">${score}</span`;
    }
}
export function draw(gameBoard) {
    if (redFood.length == 0)
        return;
    redFood.forEach((partOfFood) => {
        const div = document.createElement("div");
        div.style.gridRowStart = partOfFood.y.toString();
        div.style.gridColumnStart = partOfFood.x.toString();
        div.classList.add("red-food");
        gameBoard.appendChild(div);
    });
}
function getRandomPosition() {
    let newPosition;
    if (newPosition == null || onSnake2(newPosition)) {
        newPosition = randomGridPositionForRedFood();
    }
    return newPosition;
}
