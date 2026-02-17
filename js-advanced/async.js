//import
import {getPromise} from './getPromise.js'

//without await use then because the promise received
async function asyncFunction1(){
    let x=parseInt(Math.random()*1e15);
    const pr = getPromise(x);
    pr.then(x=>console.log("Resolve " + x),x=>console.log("Reject " + x));
}
asyncFunction1();

//await gives either error or the resolved value of promise and not the promise
async function asyncFunction2() {
    let x = Math.floor(Math.random() * 1e15);
    try {
        const result = await getPromise(x);
        console.log("Resolve " + result);
    } catch (err) {
        console.log("Reject " + err);
    }
}
asyncFunction2();
