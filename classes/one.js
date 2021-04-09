function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

const abay = new Hero('Abay', 'Next');
console.log(abay.greet());
console.log(abay.name);
console.log(abay.level);
//---------------
// Abay says hello.
// Abay
// Next

class Hero2 {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  // Adding a method to the constructor
  greet() {
    return `${this.name} says hello.`;
  }
}

//-----------------
const hero1 = new Hero2('Varg', 1);
console.log(hero1.greet());
console.log(hero1.name);
console.log(hero1.level);
//---------------
// Abay says hello.
// Abay
// Next
// Varg says hello.
// Varg
// 1
//--------------------------

// Creating a new constructor from the parent
function Mage(name, level, spell) {
  // Chain constructor with call
  Hero.call(this, name, level);

  this.spell = spell;
}
//-------------
const hero2 = new Mage('Lejon', 2, 'Magic Missile');

console.log(hero2)
// Mage { name: 'Lejon', level: 2, spell: 'Magic Missile' }



