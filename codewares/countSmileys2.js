function countSmileys(arr) {
  var smileys = [":)", ";)", ":-)", ";-)", ";~)", ":~)", ":D", ";D", ":-D", ":~D", ";-D", ";~D"];
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(countSmileys([]), 0);
console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
