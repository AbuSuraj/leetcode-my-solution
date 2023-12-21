function applyOperations(nums: number[]): number[] {
  const len = nums.length;
  let element =0;
for(let i = 0; i < len-1; i++) {
    if(nums[i] === nums[i+1]){
        nums[i] = nums[i]*2;
        nums[i+1] = 0
    }
    
}    
for(let i=0; i<len; i++){
    const val = nums[i];
    nums[i] = 0;
    if(val !==0){
      nums[element++]= val;
    }
}
 

return nums
};
console.log(applyOperations([ 0,1 ]));
