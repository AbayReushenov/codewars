function topThreeWords(text) {
  let words = {}
  text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
    let c = words[match] || 0
    words[match] = ++c
  })
  keysSorted = Object.keys(words).sort(function (a, b) { return words[b] - words[a] })
  return keysSorted.slice(0, 3)
}
