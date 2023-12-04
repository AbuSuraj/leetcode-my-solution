function createTargetArray(nums: number[], index: number[]): number[] {
  const ans: number[] = [];
  index.forEach((n,i)=>{ 
    ans.splice(n,0,nums[i])
  })
    return ans;
};

console.log(createTargetArray([1,2,3,4,0],   [0,1,2,3,0]))