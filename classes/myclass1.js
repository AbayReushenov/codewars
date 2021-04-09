var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = function(phrase){
  this.phrase = phrase;
};

MyNamespace.MyClass.prototype.sayHello = function(){
  return this.phrase;
};

var myObject = new MyNamespace.MyClass('Hello!');
var phrase = myObject.sayHello();
console.log(phrase)
