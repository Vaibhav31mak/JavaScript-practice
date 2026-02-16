function CreateCounter(){
    let count=0;
    this.getCount = function (){
        return count;
    }
    this.incrementCount = function(){
        count++;
    }
    this.decrementCount = function(){
        count--;
    }
}

//count is local to the function and not attached to this so can't be called from outside
let counter = new CreateCounter();
counter.incrementCount();
console.log(counter.getCount());

(function(){
    console.log("end");
})()