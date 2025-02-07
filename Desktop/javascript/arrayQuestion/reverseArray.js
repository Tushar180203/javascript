// //using the loop from end index to the first
const arr=[1,2,3,4,5,6];
 const newArr=[];
 for(let i=arr.length-1;i>=0;i--){
  newArr[arr.length-i-1]=arr[i];

 }

 console.log(newArr);

//another approach for reverse
function swap(a, b, nums){
    let temp=nums[a];
    nums[a]=nums[b];
    nums[b]=temp;

}
let low=0;
let high=arr.length-1;
while(low<=high){
  swap(low, high,arr);
  low++;
  high--;
}

console.log(arr);

