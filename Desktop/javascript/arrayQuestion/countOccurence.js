const arrr=[1,2,2,1,3,4,4,4,4,4,3,2,1,1];
// let maxi=0;

// for(let i=0;i<arrr.length;i++){
//     let ele=arrr[i];
//     let count=0;
//     for(let j=0;j<arrr.length;j++){
//         if(arrr[i]===arrr[j])count++;

//     }
//     if(count>=maxi){
//         maxi=count;
//     }


// }

// console.log(maxi)


//visited m store krlenge

// let maxi=0;
// let visited=[];
// for(let i=0;i<arrr.length;i++){
//     visited.push(0);
// }

// for(let i=0;i<arrr.length;i++){
//     if(visited[i]==0){
//     let ele=arrr[i];
//     let count=0;
//     for(let j=0;j<arrr.length;j++){
//         if(arrr[i]===arrr[j])count++;

//     }
//     if(count>=maxi){
//         maxi=count;
//     }
//      visited[i]=1;
//     }
//     else continue;
// }

// console.log(maxi);


//sort krke
let arr=arrr.sort();
let count=1;
let maxi=0;
let konsa=arr[0];
for(let i=0;i<arr.length;i++){
 console.log(arr[i],count);
 if(i===arr.length-2){
   if(arr[arr.length-1]===arr[arr.length-2])count++;
  }

 if(arr[i]===arr[i+1])count++;
 else if(arr[i]!==arr[i+1]){

    if(count>=maxi){
        
        console.log(`counts ${count}${arr[i]}`);
        maxi=count;
        konsa=arr[i];
     
    }
    count=0;
 }
  
}

console.log(maxi,konsa);
