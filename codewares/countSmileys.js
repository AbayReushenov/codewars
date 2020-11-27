//return the total number of smiling faces in the array
function countSmileys(arr) {
  let regStr = /^[:;][-~]?[)D]$/;
  return arr.filter((smile) => smile.match(regStr)).length;
}

console.log(countSmileys([]), 0);
console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);

// Экранирование, специальные символы
// Вот полный перечень этих символов: [ \ ^ $ . | ? * + ( ).
// var str = 'Глава 3.4.5.1 содержит дополнительную информацию';
// var re = /(глава \d+(\.\d)*)/i;
// var found = str.match(re);

// При использовании функции-конструктора необходимо использовать 
// обычные правила экранирования в строках 
// (предварять специальные символы символом обратного слеша «\»).
// Например, следующие выражения эквивалентны:

// var re = /\w+/;
// var re = new RegExp('\\w+');
// /ab+c/i;
// new RegExp('ab+c', 'i');
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp#boundaries
// https://medium.com/nuances-of-programming/%D1%88%D0%BF%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0-%D0%BF%D0%BE-%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%BC-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC-%D0%B2-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D1%85-53820a5f3435


