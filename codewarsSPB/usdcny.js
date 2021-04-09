function usdcny(usd) {
  const rate = 6.75;
  return ((usd * rate).toFixed(2) + ' Chinese Yuan')
}
console.log(usdcny(15))
