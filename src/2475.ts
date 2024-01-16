function unequalTriplets(nums: number[]): number {
  let count = 0;
  const len = nums.length;
  for(let i=0;i<len-2; i++){
    for(let j=i+1; j<len-1;j++){
        if(nums[i]!==nums[j]){ 
            
            for(let k = j+1; k<len; k++){
                if(nums[j] !== nums[k] && nums[i] !== nums[k]){count++;
                }
            }
        }
    }
  }
    return count;
};
console.log(unequalTriplets([4,4,2,4,3]));
