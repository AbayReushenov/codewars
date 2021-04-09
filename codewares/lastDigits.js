var lastDigit = function (str1, str2) {
  if (str2 === '0') return 1;
  const x = +str1.slice(str1.length - 1);
  let n = str2.slice(str2.length - 2);
  // if (x === 0 || x === 1 || x === 5 || x === 6) return x;
  // if (String(n) === '0') return 1;
  // if (x === 4 || x === 9) {
  //   if (String(n) === '00' || Number(n) % 2 === 0) {
  //     switch (x) {
  //       case 4:
  //         return 6;
  //       case 9:
  //         return 1;
  //     }
  //   } else return x;
  // }
  if (String(n) === '00') n = 100;
  let x4 = String(x ** (+n % 4 === 0 ? 4 : +n % 4));
  return +x4.slice(x4.length - 1);
}

console.log(lastDigit('7088777717290152777690229326092650820593649213336293025955968678968367649876300465182', '50132722433524845638213628'));
// 6
console.log(lastDigit("999994", "0"));            // returns 1
console.log(lastDigit("4", "1"));            // returns 4
console.log(lastDigit("4", "2"));            // returns 6
console.log(lastDigit("9", "7"));            // returns 9    
console.log(lastDigit("10", "10000000000"));  // returns 0
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"));
//, 7

// последняя цифра произведения двух натуральных чисел такая же, 
// как последняя цифра произведения последних цифр этих двух чисел.



// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
// b
//  . Note that aaa and bbb may be very large!

// For example, the last decimal digit of 979^79 
// 7
//   is 999, since 97=47829699^7 = 47829699 
// 7
//  =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
// 200
//  ) 
// 2 
// 300

//  , which has over 109210^{92}10 
// 92
//   decimal digits, is 666. Also, please take 000^00 
// 0
//   to be 111.

// You may assume that the input will always be valid.

// Examples





// Следующие операторы могут использоваться 
// с BigInt (или объектом-оберткой BigInt): +, *, -, **, %.

// BigInt это встроенный объект,
// который предоставляет способ представлять целые числа больше 2**53 - 1, 
// let g = BigInt(10011081)
// Number.MAX_SAFE_INTEGER
// 9007199254740991

/* Define a function that takes in two non-negative integers
 aaa and bbb and returns the last decimal digit of aba^bab.
 Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^797 is 999,
since 97=47829699^7 = 478296997=4782969. The last decimal digit
of (2200)2300({2^{200}})^{2^{300}}(2200)2300, which has over
109210^{92}1092 decimal digits, is 666. Also, please take 000^000
to be 111.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9
lastDigit("10","10000000000")  // returns 0 */
