function solution(input, markers) {
  return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`, 'g'), '');
}
console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
