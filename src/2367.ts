function arithmeticTriplets(nums: number[], diff: number): number {
    let cnt = 0;
    const mp: Map<number, boolean> = new Map();

    // Mark every element presence in the map.
    for (let i = 0; i < nums.length; i++) {
        mp.set(nums[i], true);
    }

    // For every element, check if there exist both numbers (elm + diff) and (elm - diff) inside the map. If yes, then increment cnt.
    for (let i = 0; i < nums.length; i++) {
        if (mp.has(nums[i] - diff) && mp.has(nums[i] + diff)) {
            cnt++;
        }
    }

    // Return the count.
    return cnt;
    //   let count = 0;
//   const len = nums.length;
//   for(let i = 0; i < len-2; i++) {
//     for(let j = i+1; j <len-1; j++){
//         if(nums[j] - nums[i]===diff){
//             for(let k = j+1; k <len; k++){
//                 if(nums[k]-nums[j]===diff){
//                     count++;
//                 }
//             }
//         }
//     }
//   }  
//   return count
};
console.log(arithmeticTriplets([4,5,6,7,8,9], 2));
