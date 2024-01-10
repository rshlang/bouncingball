

function bounceOffWalls(left, right, x, dx) {
    if (x + dx > right || x + dx < left) {
        dx = -dx;}
    return dx;
    //lines 6-8 are the business logic lines 
}
//module.exports = {sum, bounceOffWalls};
module.exports = bounceOffWalls;