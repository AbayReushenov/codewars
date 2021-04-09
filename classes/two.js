function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Вася");

console.log(user.name); // Вася
console.log(user.isAdmin); // false
// Вася
// false
//------------------
