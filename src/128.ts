function longestConsecutive(nums: number[]): number {
    const map = new Map<number, number>();
    nums.sort((a,b)=>a-b);
    console.log(nums.length);
    
    for(let i =0; i<nums.length; i++){
        if(nums[i+1]-nums[i] ===1){
            map.set(nums[i], 1);
            map.set(nums[i+1], 1);
            // i++;
            // console.log(nums[i], nums[i+1]);
            
        }
    }
    console.log(map);
    
  return map.size;
};
console.log(longestConsecutive([100,200,3,2,1,4]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
