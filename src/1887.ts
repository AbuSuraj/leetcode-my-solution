function reductionOperations(nums: number[]): number {
  let count =0;
  nums.sort((a,b)=>b-a);
 let num = 123, rev =0;
 let reversed = 0;

 while (num !== 0) {
     reversed = reversed * 10 + num % 10;
     num = Math.floor(num / 10);
 }
 
console.log(reversed);

    return count
};
console.log(reductionOperations([1,1,2,2,3]));
