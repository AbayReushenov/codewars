function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => a << 1 | b);
}

console.log(binaryArrayToNumber([0, 0, 0, 1]))  // =>1

