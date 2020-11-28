function score(dice) {
  const lookup = {
    111: 1000,
    222: 200,
    333: 300,
    444: 400,
    555: 500,
    666: 600,
    1: 100,
    5: 50,
  };

  const new1 = dice.sort().join('');
  console.log(new1);
  const re = new RegExp(/111|222|333|444|555|666|1|5/, 'g');

  const new1Re = new1.match(re) || [];
  console.log(new1Re);

  return new1Re.reduce((acc, curr) => acc + lookup[curr], 0);
}

console.log(score([2, 4, 4, 5, 4]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([1, 1, 1, 1, 1]));
console.log(score([5, 1, 1, 4, 4]));
// 24445
// [ '444', '5' ]
// 450
// 33444
// [ '444' ]
// 400
// 11111
// [ '111', '1', '1' ]
// 1200
// 11445
// [ '1', '1', '5' ]
// 250
