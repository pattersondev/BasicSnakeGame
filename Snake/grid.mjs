const GRID_SIZE = 21;

export function randomGridPosition() {

    // One is used to ensure that we can reach the 21st position in the grid, without we can only reach 20.
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}