function findMissingLetter(array) {
  const codeFirstChar = array[0].charCodeAt(0);
  for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt(0) !== codeFirstChar + i) {
      return String.fromCharCode(codeFirstChar + i)
    }
  }
  // return 'Everything OK!';
  // throw new Error("Invalid input")
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));  // => 'e'
console.log(findMissingLetter(["O", "Q", "R", "S"])); // 'P'
// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
