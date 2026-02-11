// const person = {
//     firstName: "Max",   
//     lastName: "Cautfild",
//     Address: {
//         street: "A-5",
//         City: "xyp9x"
//     },
//     place: "Life is Strange",
//     fullName: function(){
//         return this.firstName+" " +this.lastName;
//     }
// }
// for(var [key,value] of Object.entries(person)){
//     console.log(key,value);
// }
// console.log(JSON.stringify(person));
let arr=["a","b","c"];
let a=[...arr];
a[0]="b";
console.log(arr);
let b=a.toReversed();
a.reverse();
console.log(a);
b=[1,2,3];
c=b.map((value,index,arr)=>value*2);
console.log(c);
let s=new Set([1,2,3,4,4]);
console.log(s.has(5));
console.log(s);
let mp=new Map([
    [1,2],[3,4],[3,5]
]);
console.log(mp);
let str="abcdef";
let result=str.search('/de/g');
console.log(result);
let nums=[1,2,3,4];
nums.concat(arr);
console.log(nums);
