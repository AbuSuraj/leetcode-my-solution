function findErrorNums(nums: number[]): number[] {
    const ans: number [] = [];
    const n = nums.length
    const freq = new Array(n+1).fill(0);
    for(let num of nums){
        freq[num]++
    }
    for(let i=1; i<=n;i++ ){
        if(freq[i]===0){ans.push(i)}
        else if(freq[i]===2){ans.unshift(i)}
    }
    console.log(freq);
    
    return ans;
}
console.log(findErrorNums([3, 2, 2]));
// function findErrorNums(nums: number[]): number[] {
//     let twice: number[] = [];
//     let c = 0

//     const occuranceMAp = new Map<number, number>()
//     for (let i = 0; i < nums.length; i++) {
//         if (occuranceMAp.has(nums[i])) {
//             occuranceMAp.set(nums[i], (occuranceMAp.get(nums[i]) ?? 0) + 1)
//         } else {
//             occuranceMAp.set(nums[i], 1)
//         }

//     }

//     for (let [i, v] of occuranceMAp.entries()) {
//         if (v === 2) {
//             twice.unshift(i)
//         }

//     }
//     for (let i = 1; i <= nums.length; i++) {
//         if (!occuranceMAp.has(i)) {
//             console.log(i);
//             twice.push(i)
//         }
//     }
//     return twice;
// };
