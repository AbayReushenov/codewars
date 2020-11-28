function foo() {
  var randomString = function () {
    var i = Math.floor(Math.random() * 100) + 1, str = "";
    while (i-- > 0) {
      str = str + "01234567890".charAt(Math.floor(Math.random() * 10));
    }
    return str;
  };
  var i, r;
  for (i = 0; i < 100; ++i) {
    r = lastDigit(randomString(), "0");
    if (i < 1 || r !== 1) {
      Test.assertEquals(r, 1, "x ^ 0 has 1 as last digit");
      if (r !== 1)
        return;
    }
  }
}

console.log(foo());
