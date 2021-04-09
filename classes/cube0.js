class Cube {
  constructor(n) {
    this.setSide(n);
  }
  getSide() { return this.side}
  
  setSide(n = 0) {
    if (isNaN(n) === true) { return; }
    this.side = Math.abs(n);
  }
}


var c = new Cube(-5);
console.log(c.getSide())
// Test.assertEquals(c.getSide(), 10, "Should be 10");
var c2 = new Cube();
console.log(c2.getSide())
// Test.assertEquals(c.getSide(), 0, "Should be 0");

// https://www.codewars.com/kata/55c0ac142326fdf18d0000af/solutions/javascript

