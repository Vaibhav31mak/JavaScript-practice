document.getElementById("btn").addEventListener("click", ()=>{
    document.getElementById("output").value=(document.getElementById("input").value)*10;
    document.getElementById("side-effects").innerHTML=`${person.fullName()} is a character of ${person.place}.`;
    document.getElementById("side-effects").innerHTML += "xyz";
})

const person = {
    firstName: "Max",   
    lastName: "Cautfild",
    Address: {
        street: "A-5",
        City: "xyp9x"
    },
    place: "Life is Strange",
    fullName: function(){
        return this.firstName+" " +this.lastName;
    }
}