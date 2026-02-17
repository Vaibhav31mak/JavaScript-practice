//export
export function getPromise(x){
    return new Promise((resolve,reject) => {
        if(x%2){
            resolve(x);
        }
        else{
            reject(x);
        }
    });
}
