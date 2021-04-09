// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// const arr = N => [ /* the numbers 0 to N-1 */ ];

const arr = n => n ? [...Array(n).keys()] : [];
const arr3 = (n = 0) => [...Array(n).keys()]
console.log(arr(5));
console.log(arr(0));
console.log(arr());
// [ 0, 1, 2, 3, 4 ]
// []
// []

console.log(arr3(5));
console.log(arr3(0));
console.log(arr3());
// [ 0, 1, 2, 3, 4 ]
// []
// []
