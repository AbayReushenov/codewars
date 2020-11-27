// Method 1: Using library methods
// In JavaScript, there exists a method parseInt(), that takes in two arguments first one is a string and second a number that represents a particular base, like 10 for decimal base, 2 for binary. This function parses the string argument and returns an integer of the specified radix ( base).
// In our case, to convert the array of binary to decimal, we can use the parseInt() function like this −

// const arr = [1, 0, 1, 1];
// 
const parseArray = arr => {
  const binaryString = arr.join("");
  return parseInt(binaryString, 2);
};
console.log(parseArray([0, 0, 0, 1]));
