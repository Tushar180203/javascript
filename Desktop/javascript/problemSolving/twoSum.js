var twoSum = function(nums, target) {
    const mp= new Map();
   
   for(let i=0;i<nums.length ;i++){
    if(mp.has(target-nums[i])){
        return [i,mp.get(target-nums[i])];
        }

    mp.set(nums[i],i);
   }
 return [];
};

const nums=[2,7,11,15];
const target=9;

console.log(twoSum(nums,target));