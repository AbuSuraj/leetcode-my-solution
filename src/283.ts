function moveZeroes(nums: number[]): void {
  const len = nums.length;
   
   let j = 0;
  for(let i =0; i < len; i++) {
   const temp = nums[i];
   nums[i] = 0;
   if(temp !==0){
      nums[j++] = temp;
   }
  }
  console.log(nums);
  
   //  for(let i =0; i < len; i++) {
   //   if(nums[i]!==0){
   //     solution 1 
   //     [nums[i],nums[j]] = [nums[j],nums[i]];
   //      j++;
   //    //   console.log('nums[i] ', nums[i]);
   //       // const temp = nums[i];
   //       // console.log(temp, j, nums[j]);
         // solution 2
   //       // nums[i] = nums[j];
   //       // nums[j] = temp;
   //       // console.log('nonzero index ', nums[nonZeroIndex], nums[i]);
         
   //    //   nonZeroIndex++
   //   }
   //  }
   // console.log(nums);
   
};
console.log(moveZeroes([1, 0,1,0,3,12]));
