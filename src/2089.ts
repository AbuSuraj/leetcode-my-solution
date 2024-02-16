function targetIndices(nums: number[], target: number): number[] {
   nums.sort((a,b)=>a-b);
   const ans:number[] =[]
   nums.forEach((n, i) =>{
       n ===target ? ans.push(i) : '';
   })
   return ans;
};
console.log(targetIndices([1,2,4,3,2], 2));
