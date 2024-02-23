function missingNumber(nums: number[]): number {
    let ans = 0;
    const len = nums.length;
    nums.sort((a,b) => a-b);
    // console.log(nums);
    for(let i=0; i<=len; i++){
        if(i!==nums[i])
        // console.log(i, nums[i])
    return i;
    }
    return ans;
};
console.log(missingNumber( [9,6,4,2,3,5,7,0,1]));
console.log(missingNumber( [3,0,1]));
console.log(missingNumber( [0,1]));
