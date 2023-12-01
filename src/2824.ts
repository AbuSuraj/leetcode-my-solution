// function countPairs(nums: number[], target: number): number {
// let count = 0;
// nums.forEach((num, index)=>{
//     for(let j = index+1; j<nums.length; j++) {
//         num + nums[j] < target ? count++ : ''
//     }
// })
// return count;
// };
function countPairs(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
  
    let count = 0;
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum < target) {
        // If the sum is less than the target, then all pairs with nums[left] will be valid.
         
        count += right - left;
      
        left++;
      } else {
        // If the sum is greater than or equal to the target, move the right pointer to the left.
        right--;
      }
    }
  
    return count;
  }
  
console.log(countPairs([-6,2,5,-2,-7,-1,3], -2))