// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  [...str].forEach((e => -1 === ['a', 'e', 'i', 'o', 'u'].indexOf(e) ? vowelsCount += 0: vowelsCount += 1))
  return vowelsCount;
}
let str = 'enter your majic here';
console.log(getCount(str));
let str2 = 'abracadabra';
console.log(getCount(str2));
// 8
// 5
