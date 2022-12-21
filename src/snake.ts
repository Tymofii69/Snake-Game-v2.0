import { getInputDirection } from "./input.js"


export const SNAKE_SPEED = 8;
let snakeBody: coordinate[] = [
    { x: 10, y: 11 },
]
let newSegments = 0;
let ignoreHead: boolean;

export function update() {
    addSegments();

    let inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}   




export function draw(gameBoard: HTMLElement) {
    snakeBody.forEach((segment: coordinate) => {
        const div = document.createElement("div");
        div.style.gridRowStart = segment.y.toString();
        div.style.gridColumnStart = segment.x.toString();
        div.classList.add("snake");
        gameBoard.appendChild(div);
    })
}

export function expandSnake(growRate: number) {
    newSegments += growRate;
}

export function onSnake(position: coordinate, { ignoreHead = false } = {}){
    return snakeBody.some((segment, index) => {
        if (index === 0 && ignoreHead) return false;
        return equalPositions(segment, position)
    })
}

function addSegments() {
    for (let i = 0; i <= newSegments - 1; i++)
    snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    newSegments = 0;
}

export function snakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1: coordinate, pos2: coordinate) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}