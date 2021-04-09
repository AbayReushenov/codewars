const songX = `
In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income. '''
  `;

const arrayOfWords = songX.split(/[^A-Za-z']/gm).filter(each => each.length >= 1);
const arrayCleanWords = arrayOfWords.map(each => each.toLowerCase());

console.log(arrayCleanWords)

const arrayCleanNoChar = arrayCleanWords.filter(each => each.search(/[A-Za-z]/) !== -1);



console.log(arrayCleanNoChar)

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
//   'income',   "'''"
// ]
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

