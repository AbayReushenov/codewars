function bouncingBall(h, b, w) {
  if (h <= w || b >= 1) return -1;
  let r = Math.floor(Math.log(w / h) / Math.log(b)) * 2 + 1;
  if (Number.isNaN(r)) return -1;
  return r;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 1, 1.5));
