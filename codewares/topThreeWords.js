function topThreeWords(text) {
  const arrayOfWords = text.split(/[^A-Za-z']/gm).filter(each => each.length >= 1);
  const arrayCleanWords = arrayOfWords.map(each => each.toLowerCase());
  const arrayCleanNoChar = arrayCleanWords.filter(each => each.search(/[A-Za-z]/) !== -1);
  function getWordCntRd(arr) {
    return arr.reduce((prev, nxt) => {
      prev[nxt] = (prev[nxt] + 1) || 1;
      return prev;
    }, {});
  }
  const list = getWordCntRd(arrayCleanNoChar);
  const keysSorted = Object.keys(list).sort(function (a, b) { return list[b] - list[a] })
  return keysSorted.slice(0, 3)
}

const songX = `
In a village of La Mancha, the name of which I have no desire to call to '/'/ '''' 
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.
  `;
const songX2 = `''/'`;

console.log(topThreeWords(songX));
console.log(topThreeWords(songX2));

// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

