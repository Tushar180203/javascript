const arr=[];
for(let i =1;i<20;i++){
    arr.push(i);
}
const odd=[];
const even=[];
for(let i of arr){
    if(i%2===0)even.push(i);
    else odd.push(i);
}

console.log(even);
console.log(odd);