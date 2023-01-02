const GRID_SIZE = 21;
let xOfFirstCell, yOfFirstCell;
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    };
}
export function randomGridPositionForRedFood() {
    // grid without last column and row, and it returns an array of 4 coordinates of RedFood
    xOfFirstCell = Math.floor(Math.random() * (GRID_SIZE - 1) + 1);
    yOfFirstCell = Math.floor(Math.random() * (GRID_SIZE - 1) + 1);
    return [
        { x: xOfFirstCell, y: yOfFirstCell },
        { x: xOfFirstCell + 1, y: yOfFirstCell },
        { x: xOfFirstCell, y: yOfFirstCell + 1 },
        { x: xOfFirstCell + 1, y: yOfFirstCell + 1 },
    ];
}
export function outOfGrid(position) {
    return position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE;
}
