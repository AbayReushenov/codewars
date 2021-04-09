class Person {
  constructor(name, age) {
    this.info = name + 's age is ' + age;
  }
}

var john = new Person('john', 34)

console.log(john.info); // johns age is 34
