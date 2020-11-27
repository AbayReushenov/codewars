// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
  let xo = { x: 0, o: 0 };
  [...str.toLowerCase()].forEach(char => {
    if (!isNaN(xo[char])) xo[char]++;
  });
  return xo['x'] === xo['o'];
}

console.log(XO('Ox 0 Xo Xx ppp Oo'));

// NaN === NaN or NaN == NaN evaluate to false
// NaN !== NaN or NaN != NaN evaluate to true
// Therefore, use Number.isNaN() or global isNaN() functions to test whether a value is NaN.

// Rule Details
// This rule disallows comparisons to 'NaN'.

// Examples of incorrect code for this rule:

// /*eslint use-isnan: "error"*/

// if (foo == NaN) {
//     // ...
// }

// if (foo != NaN) {
//     // ...
// }
// Examples of correct code for this rule:

// /*eslint use-isnan: "error"*/

// if (isNaN(foo)) {
//     // ...
// }

// if (!isNaN(foo)) {
//     // ...
// }
