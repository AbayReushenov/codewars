class List {
  constructor() {
  }
  countSpecDigits(int, dig) {
    return dig.map(e => {
      let arr = new Array(2).fill(e);
      let re = new RegExp(e, "g");
      arr[1] = (int.join('').match(re) !== null) ? int.join('').match(re).length : 0;
      return arr
    })
  }
}



let integersList = [1, 1, 2, 3, 1, 2, 3, 4]
let digitsList = [1, 3]
const l = new List()
// l.count_spec_digits(integersList, digitsList) == [(1, 3), (3, 2)]
console.log(l.countSpecDigits(integersList, digitsList))

integersList = [-18, -31, 81, -19, 111, -888];
digitsList = [1, 8, 4];
console.log(l.countSpecDigits(integersList, digitsList))
// [ [ 1, 3 ], [ 3, 2 ] ]
// [ [ 1, 7 ], [ 8, 5 ], [ 4, 0 ] ]
