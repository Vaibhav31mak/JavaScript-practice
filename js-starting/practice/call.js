function printfullName(hometown){
    return this.firstName + " " + this.lastName + "to " + hometown;
}

let person = {
    firstName: "Max",
    lastName: "Cautfield"
}

//function borrowing
console.log(printfullName.call(person,"Seattle"));
//apply() -> pass args in arraylist
console.log(printfullName.apply(person,["Seattle"]));
//binf() -> same as call method but returns function
console.log(printfullName.bind(person, "Seattle"))