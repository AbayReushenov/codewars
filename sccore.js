function score(dice) {
  const boxIn = new Array(7).fill(0);
  for (let each of dice) boxIn[each]++;
  for (let i = 1; i < 7; i++) {
    if (boxIn[i] >= 3) {
      boxIn[i] -= 3;
      switch (i) {
        case 1:
          boxIn[0] += 1000 + 100 * boxIn[i];
          break;
        case 2:
          boxIn[0] += 200;
          break;
        case 3:
          boxIn[0] += 300;
          break;
        case 4:
          boxIn[0] += 400;
          break;
        case 5:
          boxIn[0] += 500 + 50 * boxIn[i];
          break;
        case 6:
          boxIn[0] += 600;
          break;
      }
    } else if (boxIn[i] < 3) {
      switch (i) {
        case 1:
          boxIn[0] += 100 * boxIn[i];
          break;
        case 5:
          boxIn[0] += 50 * boxIn[i];
          break;
      }
    }
  }
  return (boxIn[0]);
}

console.log(score([2, 4, 4, 5, 4]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([1, 1, 1, 1, 1]));
console.log(score([5, 1, 1, 4, 4]));
