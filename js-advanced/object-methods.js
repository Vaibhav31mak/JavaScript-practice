const character = {
    firstName: "Max",
    lastName: "Cautfield",
    show: "Life is Strange",
    company: "Dontmond"
}
const person={}
Object.assign(person, character);
person.fullName="Max Cautfield"
//assign a new property or change property with defineProperty method with:-
// 1. enumerable
// 2. writable
// 3. configurable
Object.defineProperty(person, "partner", {value: "chloe", enumerable: true})

for([key, value] of Object.entries(person)){
    console.log(key + ": " + value);
}

// preventExtension - cant add property, seal - cant add or delete and freeze - do none
Object.freeze(person)
Object.defineProperty(person, "friend", {value: "kate", enumerable: true})
