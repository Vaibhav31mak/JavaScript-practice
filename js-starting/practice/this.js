//in non strict mode js replaces the undefined and null for this with global object
// "use strict";

// console.log(this)

function x(){
    console.log(this)
}
// this depends on "HOW" the function is called. if called with this then it refers to window object
x();
//this.x();
let name = "Chloe";
function Person(name) {
    this.name = name;
}

const p1 = new Person("Alice"); // Works fine
// const p2 = Person("Bob");       // Oops! 'this' is global or undefined
console.log(p1.name);           // "Alice"
// console.log(p2.name);
// console.log(window.name);       // "Bob" in non-strict mode

// arrow function has this refers to enclosing lexical context which is the function inside which it is

const obj = {
    a: 10,
    b: () => console.log(this),
    c: function() {
        return console.log(this)
    },
    d: function(){
        console.log(this)
        const x = () => {
            console.log(this)
        };
        x();
    }
}
obj.b();
obj.c();
obj.d();

//html element is this in html -> DOM Element