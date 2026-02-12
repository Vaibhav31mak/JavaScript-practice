let arr = [2,3,4,5,6,34,4,3,24,5,1,4,];
let mp=new Map();
for(let i=0;i<arr.length;i++){
    mp.set(arr[i],(mp.get(arr[i])||0)+1);
}
for(let [key,value] of mp){
    console.log(key,value);
}
