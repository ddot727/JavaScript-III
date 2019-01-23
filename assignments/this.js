/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding: When you call a function, "this" is referring to the object that is left of the dot.

* 2. Explicit Binding: "This" is explicitly stated when you use the .call, .apply, and .bind methods.

* 3. Window Binding: The "This" keyword is defaulting to the window object since there is nothing to the left of the dot or using .call/.apply/.bind. The function will be undefined unless you use "use strict" which will most likely not work.

* 4. New Binding: Using constructor functions, a new object is created and it is saved as "this".

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function sayName(name) {
//     console.log(this);
//     return name;
// }
// sayName(steven);

// Principle 2

// code example for Implicit Binding

var sayName = function(person) {
    person.sayName = function() {
        console.log(this.name);
    };
};

var me = {
    name: "Erick",
    age: 24,
};

var her = {
    name: "Shirley",
    age: 92,
};

sayName(me);
sayName(her);

me.sayName();
her.sayName();


// Principle 3

// code example for New Binding

function GoodSport(player) {
    this.saying = "Good game ";
    this.player = player;
    this.speak = function() {
        console.log(this.saying + this.player);
        // console.log(this);
    };
};

var sammy = new GoodSport("Simba");
var simba = new GoodSport("Sammy");
sammy.speak();
simba.speak();

// Principle 4

// code example for Explicit Binding

var sayName = function() {
    console.log(`My name is ${this.name}`);
};

var karen = {
    name: "Karen",
};

sayName.call(karen);