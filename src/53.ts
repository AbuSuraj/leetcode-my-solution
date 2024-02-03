function maxSubArray(nums: number[]): number {
    let maxSub = nums[0], currentSum = 0;
    for(let n of nums){
        if(currentSum <0){currentSum=0;}

        currentSum +=n;
        maxSub = Math.max(maxSub, currentSum);
    }
   return maxSub;
};