// function bounceOffWalls(left, right, x, dx) {
//     if (x + dx > right || x + dx < left) {
//         dx = -dx;}
//     return dx;
//     //lines 6-8 are the business logic lines 
// }
function bounceOffFloorOrCeiling(floor, ceiling, y, dy) {
    if (y + dy > ceiling || y + dy < floor){
       dy = -dy; 
    }
       return dy;
    // dy = -1*(dy);
    //if (-3 + -2) > height || -3 + -2 < 0)
  // 2 = -1*(-2)}
}
//module.exports = {sum, bounceOffWalls};
// module.exports = {bounceOffWalls, bounceOffFloorOrCeiling}
module.exports = bounceOffFloorOrCeiling;