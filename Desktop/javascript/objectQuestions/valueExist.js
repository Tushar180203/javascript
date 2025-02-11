// const obj={
//     "tushar":1,
//     "sharangpani":2,
//     "jawn":3
// }

// function check(obj,val){
//     if(obj[val] !=undefined)return true;
//     else return false;
// }


// const istrue=check(obj,"sher");
// console.log(istrue);


const  arr=[1,1,2,2,1,1,3,9,7];

// const mp= new Map();

// for(let i=0;i<arr.length;i++){
//     if(mp.has(arr[i])){
//         let count=mp.get(arr[i]);
//         count++;
//         mp.set(arr[i],count);
//     }
//     else{
//         mp.set(arr[i],1);
//     }


// }

// const a= arr.sort();
// console.log(a.reverse());


console.log(Array.of(arr));

arr.unshift(2);
console.log(arr);

arr.splice(0,1);
console.log(arr);

let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat(4));
