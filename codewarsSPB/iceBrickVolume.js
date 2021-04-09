// Task:
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you.
// The bricks width and height are equal, forming a square. 
// Just for fun and also to impress the magician and people around, you decided to calculate 
// the brick's volume. Write a function iceBrickVolume that will except these parameters:

const { clearConfigCache } = require('prettier');

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

// Note:
// All inputs are integers. Assume no irregularities to the cuboid brick. You may assume the bottle
//  is shaped like a cylinder. The brick cannot fit inside the rim.

// All inputs are integers.

// Examples:
// iceBrickVolume(1, 10, 2); // => 16
// iceBrickVolume(5, 30, 7); // => 1150
// ALGORITHMS
// Волшебник в метро показал вам трюк, он положил ледяной кирпич в бутылку, чтобы произвести на вас впечатление.
// Ширина и высота кирпичей равны, образуя квадрат.
// Ради развлечения, а также чтобы произвести впечатление на фокусника и окружающих, вы решили посчитать
// объем кирпича. Напишите функцию iceBrickVolume, которая будет исключать следующие параметры:

// радиус - радиус бутылки (всегда> 0);
// bottleLength - общая длина бутылки (всегда> 0);
// rimLength - длина от верха бутылки до кирпича (всегда <bottleLength);
// И вернуть объем ледяного кирпича, который магу удалось поместить в бутылку.

function iceBrickVolume(radius, bottleLength, rimLength) {
  // Your code should be here ;)
  const sideOne = radius * (2 ** (1 / 2));
  const sideTwo = bottleLength - rimLength;
  return Math.round((sideOne ** 2) * sideTwo)
}
console.log(iceBrickVolume(1, 10, 2))
console.log(iceBrickVolume(5, 30, 7))
