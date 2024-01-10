//const sum = require('./sum');
const bounceOffWalls = require('./bounce');
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
  test('maintains direction when moving toward the right wall', () => {
    const width = 30;
    const left = 0;
    const right = width;
    let dx = 2;
    const x = 15;
    dx = bounceOffWalls(left, right, x, dx);
    expect(dx).toBe(2);
  });
  test('maintains direction when moving toward the left wall', () => {
    const width = 30;
    const left = 0;
    const right = width;
    let dx = -2;
    const x = 15;
    dx = bounceOffWalls(left, right, x, dx);
    expect(dx).toBe(-2);
  });
  test('reverses direction when hitting the right wall', () => {
    const width = 30;
    const left = 0;
    const right = width;
    let dx = 2;
    const x = 30;
    dx = bounceOffWalls(left, right, x, dx);
    expect(dx).toBe(-2);
  });
  test('reverses direction when hitting the left wall', () => {
    const width = 30;
    const left = 0;
    const right = width;
    let dx = -2;
    const x = 0;
    //this is the setup piece
   dx = bounceOffWalls(left, right, x, dx);
    //bounceOffWalls is what we're testing
   expect(dx).toBe(2);
    //this is the expectation
  });
  //dx = bounceOffWalls (left, right, x, dx)
//   if (x + dx > width || x + dx < 0) {
//   dx = -dx;
// //dx = 2 (true) 
// } 
  //bounceOffRoofAndFloor
