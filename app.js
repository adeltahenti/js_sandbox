/**** Built in Constructors ****/

/* // String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

if (name2 === 'Jeff') {
  console.log('Yes');
} else {
  console.log('No');
}

// Number

const num1 = 5;
const num2 = new Number(5);

// Boolean

const bool1 = true;
const bool2 = new Boolean(false);

// Function
const getSum1 = function (x, y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return x + y');

// Object
const john1 = {
  name: 'John'
};

const john2 = new Object({
  name: 'John'
});

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2); 
*/

/**** Prototypes Explained ****/
/* 
// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

// Gets Maried
Person.prototype.getMaried = function (newLastName) {
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1976');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getMaried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName')); 
*/

/**** Prototypal Inheritance ****/

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}, welcome to our company.`;
}

console.log(customer1.greeting());