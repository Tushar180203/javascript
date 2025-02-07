
function fibonacci(n){
    if(n<=1)return n;
    return fibonacci(n-1)+fibonacci(n-2);
}
const arr=[];
for(let i=0;i<=8;i++){
 arr.push(fibonacci(i));
}

console.log(arr);