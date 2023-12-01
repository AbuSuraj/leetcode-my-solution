function runningSum(nums: number[]): number[] {
const sum: number [] = [];
let s = 0;
nums.forEach(n =>{
 s += n;
 sum.push(s) 
})
return sum
};

console.log(runningSum([1,1,1,1]))