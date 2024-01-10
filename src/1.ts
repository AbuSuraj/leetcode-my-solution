function twoSum(nums: number[], target: number): number[] {
     
    let i=0
     const numberMap = new Map();
      
    while(i<nums.length){
        let item = target - nums[i];
        if(numberMap.has(item)){
            return [numberMap.get(item), i]
        }
        numberMap.set(nums[i],i);
        i++
        
    }
    return [];
};
console.log(twoSum([3,3], 6));
