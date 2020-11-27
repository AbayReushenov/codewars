const binaryArrayToNumber = a => +('0b' + a.join``)

console.log(binaryArrayToNumber([0, 0, 0, 1]))  // =>1

