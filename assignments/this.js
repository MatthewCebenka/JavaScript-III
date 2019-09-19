/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Binding: When javascript defaults to using the window binding.
 * 2. Implicit Binding: Implies that the window object is referring to the object left of the dot notation when a method is used on an object.
 * 3. New Binding: Creates a new object with attributes that inherit from type from a parent.
 * 4. Explicit Binding: Is when you bind an object to a function using something
 like the call method. Because the method and new object are not under the same
 object you would need to be more explicit about what needs to happen with your
 object that you want to reference to function that isn't immediatly available.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding

function sayName(name) {
    return name;
}
console.log(sayName("Bob"))


// Principle 2
// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
    }
};
console.log(myObj.sayHello('Tim'));


// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
    };
}

const jerry = new CordialPerson('Kyle');
const newman = new CordialPerson('Matthew');

jerry.speak();
newman.speak();

// Principle 4
// code example for Explicit Binding

function greet(l1, l2, l3) {
    alert(
        `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
    )
}
const user = {
    name: 'Tyler',
    age: 27,
}
const languages = ['JavaScript', 'Ruby', 'Python']
const newFn = greet.bind(user, languages[0], languages[1], languages[2])
console.log(newFn())