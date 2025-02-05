function swap(a,b,nums){
    let temp=nums[a];
    nums[a]=nums[b];
    nums[b]=temp;

 }
var sortColors = function(nums) {
    let low=0;
    let high=nums.length-1;
  let mid=0;
    
      
       while(mid<=high){
        if(nums[mid]==0){
           swap(low,mid,nums);
           low++;
           mid++;
        }
        else if(nums[mid]==2){
           swap(high,mid,nums);
           high--;
        }
     else{
        mid++;
     }
    }
    return nums;
};

const nums=[1,0,2,0,1,0,2,2];
console.log(sortColors(nums));