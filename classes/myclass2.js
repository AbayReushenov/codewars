var MyNamespace = MyNamespace || {}

MyNamespace.MyClass = class{
  constructor(arg){
    this.arg = arg
  }
  
  sayHello(){
    return this.arg
  }
}
var myObject = new MyNamespace.MyClass('Hello!');
var phrase = myObject.sayHello();
console.log(phrase)
