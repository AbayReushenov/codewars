function getCount(str) {
  var vowels = 'aeiou';
  return str.split("").reduce((acc,char) => {
      if (vowels.indexOf (char) > -1) {
        acc++
      }
      return acc
  }, 0)
}
let str = 'enter your majic here';
console.log(getCount(str));
let str2 = 'abracadabra';
console.log(getCount(str2));
// 8
// 5
