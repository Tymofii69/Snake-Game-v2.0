import { getInputDirection } from "./input.js";
export const SNAKE_SPEED = 8;
let snakeBody = [
    { x: 10, y: 11 },
];
let newSegments = 0;
let ignoreHead;
export function update() {
    addSegments();
    let inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = Object.assign({}, snakeBody[i]);
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}
export function draw(gameBoard) {
    snakeBody.forEach((segment) => {
        const div = document.createElement("div");
        div.style.gridRowStart = segment.y.toString();
        div.style.gridColumnStart = segment.x.toString();
        div.classList.add("snake");
        gameBoard.appendChild(div);
    });
}
export function expandSnake(growRate) {
    newSegments += growRate;
}
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (index === 0 && ignoreHead)
            return false;
        return equalPositions(segment, position);
    });
}
export function onSnake2(array) {
    return array.some((partOfRedFood) => {
        return onSnake(partOfRedFood);
    });
}
function addSegments() {
    for (let i = 0; i <= newSegments - 1; i++)
        snakeBody.push(Object.assign({}, snakeBody[snakeBody.length - 1]));
    newSegments = 0;
}
export function snakeHead() {
    return snakeBody[0];
}
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}
