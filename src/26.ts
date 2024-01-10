function removeDuplicates(nums: number[]): number {
    let index = 1;
    for(let i =1; i<nums.length; i++) {
        if(nums[i]!== nums[index-1]){
            nums[index++] = nums[i]
        }
    }
  
    return index
//   const uniqueSe = new Set(nums) ;
//   console.log(uniqueSe);
  
//   return [...uniqueSe].length; 
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
