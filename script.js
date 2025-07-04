// Part 1: Constructor Function & Prototype
function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
}

PersonConstructor.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new PersonConstructor("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.


// Part 2: Class Syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }

  haveBirthday() {
    this.age += 1;
    console.log(`Happy birthday ${this.name}! You are now ${this.age}.`);
  }
}

const person2 = new Person("Alice", 30);
person2.greet();          // Output: Hi, I'm Alice and I'm 30 years old.
person2.haveBirthday();   // Output: Happy birthday Alice! You are now 31.

