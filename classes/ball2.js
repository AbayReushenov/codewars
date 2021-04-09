var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

var ball1 = new Ball();
var ball2 = new Ball("super");

console.log(ball1.ballType)     //=> "regular"
console.log(ball2.ballType)     //=> "super"
