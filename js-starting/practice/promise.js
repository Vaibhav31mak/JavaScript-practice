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