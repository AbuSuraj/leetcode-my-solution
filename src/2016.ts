function maximumDifference(nums: number[]): number {
    let  max_difference = -1, left= nums[0], right = 1;

    while(right < nums.length){
        if(left <nums[right]){
            max_difference = Math.max(max_difference, nums[right]-left);
        } else {
            left = nums[right]
    }
    right++;
    }
    return max_difference
};
console.log(maximumDifference([1,5,2,10]));
