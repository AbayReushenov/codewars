function check(num, act) {
  return !act ? num : act(num);
}
function zero(func) {
  return check(0, func);
}
function one(func) {
  return check(1, func);
}
function two(func) {
  return check(2, func);
}
function three(func) {
  return check(3, func);
}
function four(func) {
  return check(4, func);
}
function five(func) {
  return check(5, func);
}
function six(func) {
  return check(6, func);
}
function seven(func) {
  return check(7, func);
}
function eight(func) {
  return check(8, func);
}
function nine(func) {
  return check(9, func);
}
function plus(inner) {
  return function (outer) {
    return outer + inner;
  }
}
function minus(inner) {
  return function (outer) {
    return outer - inner;
  }
}
function times(inner) {
  return function (outer) {
    return outer * inner;
  }
}
function dividedBy(inner) {
  return function (outer) {
    return Math.floor(outer / inner);
  }
}


console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
