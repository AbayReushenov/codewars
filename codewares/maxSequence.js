var maxSequence = function (arr) {
  if (arr.length < 1 || arr.filter(each => each < 0).length === arr.length) return 0;
  let sumMaxArr = 0;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      let arrCurrent = arr.slice(i, j),
        sumCurrent = arrCurrent.reduce((a, b) => a + b, 0);
      // console.log(arrCurrent);
      if (sumCurrent > sumMaxArr) {
        sumMaxArr = sumCurrent;
      }
    }
  }
  return sumMaxArr;
}

console.log(maxSequence([5, 1, -3, 4, -1, 2, 1, -5, 0]));
// should be 41: 
console.log(maxSequence([]));
// should be 0: []
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]));
// should be 0: [-2, -1, -3, -4, -1, -2, -1, -5, -4]
// false
// 6
// true
// 0
// true
// 0
