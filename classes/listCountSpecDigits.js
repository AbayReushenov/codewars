// We need a method in the List Class that may count specific digits from a given list of integers. 
// This marked digits will be given in a second list. The method .count_spec_digits()/.countSpecDigits() will
//  accept two arguments, a list of an uncertain amount of integers integers_lists/integersLists
//  (and of an uncertain amount of digits, too) and a second list, digits_list/digitsList that has the specific 
// digits to count which length cannot be be longer than 10 (It's obvious, we've got ten digits). 
// The method will output a list of tuples, each tuple having two elements, the first one will be a digit to count,
//  and second one, its corresponding total frequency in all the integers of the first list.
//  This list of tuples should be ordered with the same order that the digits have in digitsList
// l = List()

class List {
  constructor() {
  }
  countSpecDigits(int, dig) {
    return dig.map(e => {
      let arr = new Array(2);
      arr[0] = e;
      var replace = e;
      var re = new RegExp(replace, "g");
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
