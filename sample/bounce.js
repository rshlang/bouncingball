

function bounceOffWalls(left, right, x, dx) {
    if (x + dx > right || x + dx < left) {
        dx = -dx;}
    return dx;
    //lines 6-8 are the business logic lines 
}
// function bounceOffFloorOrCeiling(floor, ceiling, y, dy) {}
//module.exports = {sum, bounceOffWalls};
module.exports = bounceOffWalls;
