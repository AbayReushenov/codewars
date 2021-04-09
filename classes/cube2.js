class Cube {
  constructor(side) {
    this.setSide(side)
  }

  getSide() {
    return this.side
  }
  
  setSide(side = 0) {
    this.side = Math.abs(side)
  }
}

var c = new Cube(10);
console.log(c.getSide())
// Test.assertEquals(c.getSide(), 10, "Should be 10");
var c2 = new Cube();
console.log(c2.getSide())
// Test.assertEquals(c.getSide(), 0, "Should be 0");
