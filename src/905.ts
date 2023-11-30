function sortArrayByParity(nums: number[]): number[] { 
  const even: number[] = [];
  const odd: number[] = [];
 nums.forEach(num =>{
    num % 2===0 ? even.push(num) : odd.push(num)
 })
  return [...even,...odd];
};
console.log(sortArrayByParity([0]))