function findMaxAverage(nums: number[], k: number): number {
  let sum = nums.slice(0,k).reduce((acc, sum)=>acc+sum, 0);
//   console.log('m ',sum);
 let maxSum = sum;
  for(let i =k; i < nums.length; i++){
    sum -= nums[i-k];
    sum += nums[i];
    maxSum = Math.max(maxSum,sum);
  }
    return maxSum/k;
};
console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
