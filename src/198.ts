function rob(nums: number[]): number {
    const len = nums.length
    const dp: number [] = new Array(len+3).fill(0);
    for(let i = len-1;i>=0; i--){
        console.log(nums[i]);
        
        dp[i] = nums[i]+Math.max(dp[i+2], dp[i+3])
    }
    return Math.max(...dp)
};
console.log(rob([2,7,9,3,1]));
