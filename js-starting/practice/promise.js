let x=2;
let promise = new Promise((resolve, reject) => {
    if(x!=1){
        reject(new Error("invalid"));
    }
    else{
        resolve(x);
    }
});

promise.then((x)=>{
    console.log(x);
}).catch((error)=>{
    console.log(error.message);
});

/*
promise.all([]); // only if all resolved -> fail fast, any fails return error of it
promise.settledAll([]); // if all settled -> resolved or rejected
promise.race([]); // first settled
promise.any([]); // first fulfilled -> if all failed then return an aggregated error -> success seeking API
// settled -> success or failure, fulfilled -> success, reject -> failure
*/

// promise APIs:-
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"),3000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 fail"),2000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"),1000);
})

// Promise.all([])
Promise.all([p1,p2,p3]).then(res => console.log(res))
.catch((err)=>console.error(err));

// Promise.allSettled([]) -> gives promise objects not values
Promise.allSettled([p1,p2,p3]).then(res => console.log(res))
.catch((err)=>console.error(err));

// Promise.race([])
Promise.race([p1,p2,p3]).then(res => console.log(res))
.catch((err)=>console.error(err));

//Promise.any([])
Promise.any([p2]).then(res => console.log(res))
.catch((err)=>console.error(err.errors));

//end main thread
console.log("end");