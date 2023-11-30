function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//   const sortedCandies = [... candies].sort((a,b)=>a-b);
//   const lenght = sortedCandies.length;
//   const result: boolean [] = []
//   candies.forEach((candy, index) =>{
    
//     candy+extraCandies>= sortedCandies[lenght-1] ? result[index] = true : result[index] = false
const max = Math.max(... candies)
//   const lenght = sortedCandies.length;
  const result: boolean [] = []
  candies.forEach((candy, index) =>{
    candy+extraCandies>= max ? result[index] = true : result[index] = false;
    
  })
//   console.log(sortedCandies, candies);
  
    return result
};
console.log(kidsWithCandies([4,2,1,1,2], 1));
