//pass by reference and value
function fun(a,num){
    a=11;
    num.value++;
    console.log(a,num.value);
}
var a=10;
var num={value:5};
fun(a,num);
console.log(a,num.value);

//closures with setTimeout()
function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000)
    }
}
x();

//counter with closures
function counter(){
    let count=0;
    this.incrementCounter=()=>{
        count++;
    }
    this.decrementCounter=()=>{
        count--;
    }
    this.displayCounter=()=>{
        console.log(count);
    }
}
let timer= new counter();
timer.incrementCounter();
timer.displayCounter();

//function expression
let functionExpression = function fun(){ //functionExpression hoisted but fun isn't
    console.log(fun);
}
// console.log(fun) //Reference Error -> in its local scope
console.log(functionExpression());

//callback hell