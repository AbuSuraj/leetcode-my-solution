function smallerNumbersThanCurrent(nums: number[]): number[] {
   const lenght = nums.length;
    let count: number [] = [];

    // solution 1 
    // for(let i = 0; i<lenght; i++){
    //     let c =0;
    //     for(let j = 0; j<lenght;j++){
    //         if(nums[i]> nums[j]){c++;}
    //     }
    // count.push(c);  
    // }
//  solution 2 
const sorted = [...nums].sort((a,b)=>a-b) 
  return nums.map((n)=>sorted.indexOf(n));  
};
const ans = smallerNumbersThanCurrent([5,0,10,0,10,6]);
console.log(ans);
