function findErrorNums(nums: number[]): number[] {
  let twice: number [] = [];
let c = 0
 
  const occuranceMAp = new Map<number, number>()
  for(let i=0;i<nums.length;i++){
       if(occuranceMAp.has(nums[i])){
        occuranceMAp.set(nums[i], (occuranceMAp.get(nums[i])??0)+1)
       } else{
        occuranceMAp.set(nums[i],1)
       }
       
    }
 
  for(let [i,v]of occuranceMAp.entries()){
    if(v===2){
        twice.unshift(i)
    }
   
  }
  for(let i=1; i<=nums.length; i++){
    if(!occuranceMAp.has(i)){
console.log(i); 
        twice.push(i)
    }
  }
  return twice;
};
console.log(findErrorNums( [3,2,2]));
