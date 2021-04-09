if (typeof MyNamespace == 'undefined') {
  var MyNamespace = {};
}

MyNamespace.MyClass = function (string) {
  this.hello = string
  this.sayHello = function () {
    return this.hello;
  };
}
var myObject = new MyNamespace.MyClass('Hello!');
var phrase = myObject.sayHello();
console.log(phrase)
