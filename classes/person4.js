class Person {
  constructor(firstName, age){
      this.firstName = firstName;
      this.age = age;
      this.info = firstName + 's age is ' + age;
  }
}

var john = new Person('john', 34)

console.log(john.info); // johns age is 34
