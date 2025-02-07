const arr=[10,20,30,40,50];
const a=[20,30,50,10,20];
console.log(arr);
const aa=arr.sort();
let flag=false;
for(let i=0;i<arr.length;i++){
  if(aa[i]!==arr[i])flag=true;
  console.log(arr);

}

if(flag===true)console.log("not sorted");
else console.log("sorted")