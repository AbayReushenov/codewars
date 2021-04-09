const key = (words) => words.split(' ').map(w => w.substring(0, 1).toUpperCase() + w.substring(1).toLowerCase()).join(' ');
console.log(key('uhbUkjhbiughUU UUhbkjjb '))
// ± |master ↑2 ?:32 ✗| → node test.js 
// Uhbukjhbiughuu Uuhbkjjb 

