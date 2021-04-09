const songX = `
In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.
  `;

const arrayOfWords = songX.split(/[^A-Za-z']/gm).filter(each => each.length >= 1);
const arrayCleanWords = arrayOfWords.map(each => each.toLowerCase());

console.log(arrayCleanWords)

function getWordCntRd(arr) {
  return arr.reduce((prev, nxt) => {
    prev[nxt] = (prev[nxt] + 1) || 1;
    return prev;
  }, {});
}
const list = getWordCntRd(arrayCleanWords);

const keysSorted = Object.keys(list).sort(function(a,b){return list[b]-list[a]})
console.log(keysSorted.slice(0,3))

console.log(keysSorted)
// [
//   'in',       'a',         'village',  'of',        'la',
//   'mancha',   'the',       'name',     'of',        'which',
//   'i',        'have',      'no',       'desire',    'to',
//   'call',     'to',        'mind',     'there',     'lived',
//   'not',      'long',      'since',    'one',       'of',
//   'those',    'gentlemen', 'that',     'keep',      'a',
//   'lance',    'in',        'the',      'lance',     'rack',
//   'an',       'old',       'buckler',  'a',         'lean',
//   'hack',     'and',       'a',        'greyhound', 'for',
//   'coursing', 'an',        'olla',     'of',        'rather',
//   'more',     'beef',      'than',     'mutton',    'a',
//   'salad',    'on',        'most',     'nights',    'scraps',
//   'on',       'saturdays', 'lentils',  'on',        'fridays',
//   'and',      'a',         'pigeon',   'or',        'so',
//   'extra',    'on',        'sundays',  'made',      'away',
//   'with',     'three',     'quarters', 'of',        'his',
//   'income'
// ]



var list2 = {"you": 100, "me": 75, "foo": 116, "bar": 15};
var keysSorted1 = Object.keys(list2).sort(function(a,b){return list2[b]-list2[a]})
console.log(keysSorted1);     // bar,me,you,foo
// [ 'foo', 'you', 'me', 'bar' ]
