class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives) {
      if (this.number === n) return true
      this.lives -= 1;
      return false
    }
    throw Error // throw new Error(); // return error
  }
}

let guesser = new Guesser(10, 2);
console.log(guesser.guess(10));
console.log(guesser.guess(1));
console.log(guesser.guess(2));
console.log(guesser.guess(10));
// describe('Guesser', () => {
//   it('Correct guess should return true', () => {
//     let guesser = new Guesser(10, 2);
//     guesser.guess(10);
//     guesser.guess(10);
//     guesser.guess(10);
//     guesser.guess(10);
//     Test.expect(guesser.guess(10));
//   });

//   it('Wrong guess should return false', () => {
//     let guesser = new Guesser(10, 2);
//     guesser.guess(1);
//     Test.expect(!guesser.guess(1));
//   });

//   it('Lives ran out should throw', () => {
//     let guesser = new Guesser(10, 2);
//     guesser.guess(1);
//     guesser.guess(2);

//     Test.expectError('Expect error already dead', () => { guesser.guess(10); });
//   });
// });
// Imagine you are creating a game where the user has to guess the correct number. 
// But there is a limit of how many guesses the user can do.

// If the user tries to guess more than the limit, the function should 
/// throw an error.
// If the user guess is right it should return true.
// If the user guess is wrong it should return false and lose a life.
// Can you finish the game so all the rules are met?
