function solution(number) {
  if (number <= 0) return 0;
  let numberArr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numberArr.push(i);
    }
  }
  return numberArr.reduce((a, b) => a + b, 0);
}

console.log(solution(36));
