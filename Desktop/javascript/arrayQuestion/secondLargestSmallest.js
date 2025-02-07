// Second smallest 
// const arr=[10,2,5,20,30,40,50,60];
// let maxi=Infinity;
// let secMax=Infinity;
// for(let i=0;i<arr.length;i++){
//     if(maxi>arr[i])maxi=arr[i];
//     if((maxi<arr[i]) && (secMax>arr[i]))secMax=arr[i];
// }

// console.log(secMax);


//second largest
const arr=[10,2,5,20,30,40,50,60];
let maxi=-Infinity;
let secMax=-Infinity;
for(let i=1;i<arr.length;i++){
    if(maxi<arr[i]){
        secMax=maxi;
        maxi=arr[i];
   
}}

console.log(secMax);