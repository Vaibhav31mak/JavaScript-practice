//via closures
const incrementer = (function(){
    let count = 0;
    return function incrementer(){
        count++;
        count++;
        return count;
    } 
})();
console.log(incrementer());

//via class
class User{
    static count = 0;
    constructor(){
    }
    static incrementCount(){
        User.count++;
    }
    static getCount(){
        return User.count;
    }
}
User.incrementCount();
User.incrementCount();
console.log(User.getCount());