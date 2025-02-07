const arr=[10,20,70,20,80,100];

let maxi= Number.MAX_VALUE;

for(let i=0;i<arr.length;i++){
    if(arr[i]<maxi)maxi=arr[i];
}

console.log(maxi);
