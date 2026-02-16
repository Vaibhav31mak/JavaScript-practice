function Person(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.getfullName=function(){
        return this.firstName+ " " +this.lastName;
    }
}

const p = new Person("Max", "Cautfield");
console.log(p.getfullName(), p.firstName)