function decompressRLElist(nums: number[]): number[] {
 let result: number [] =[];
//  for (let i = 0; i < nums.length; i++){
//     if(i % 2 ===0){
//         for(let j = 0; j < nums[i]; j++){
//             result.push(nums[i+1])
//         }
//     }
//  }
 
for (let i = 0; i <nums.length; i +=2){
   
     result.push(...new Array(nums[i]).fill(nums[i+1]));   
}
return result
};
console.log(decompressRLElist([1,1,2,3]))