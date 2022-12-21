let inputDirection = { x: 0, y: 0 };
let lastInputDirection;
export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}
window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            if (lastInputDirection.y !== 0)
                return;
            inputDirection = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (lastInputDirection.y !== 0)
                return;
            inputDirection = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (lastInputDirection.x !== 0)
                return;
            inputDirection = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (lastInputDirection.x !== 0)
                return;
            inputDirection = { x: 1, y: 0 };
            break;
    }
});
