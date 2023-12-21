function moveZeroes(nums: number[]): void {
  const len = nums.length;
    let nonZeroIndex = 0;
    for(let i =0; i < len; i++) {
     if(nums[i]!==0){
        [nums[i],nums[nonZeroIndex]] = [nums[nonZeroIndex],nums[i]];
        nonZeroIndex++
     }
    }
   console.log(nums);
   
};
console.log(moveZeroes([0,1,0,3,12]));
