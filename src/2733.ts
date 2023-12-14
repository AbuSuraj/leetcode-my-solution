// function findNonMinOrMax(nums: number[]): number {
//     const len = nums.length;
//     if(len < 3) return -1;
//     let min = Infinity;
//     let max = -Infinity;
//     let midValue = nums[0];
//     for( const num of nums){
//         min = Math.min(min, num);
//         max = Math.max(max, num);
//         if(num !==min && num !==max){
//             midValue = num;
//             break
//         }
//     }
//     return midValue;
// }
    // nums.sort((a,b)=>a-b);
// const mid = Math.floor((len-1)/2);
// if(len <3){return -1}
// else { 
//     return nums[mid]
// }
// };
function findNonMinOrMax(nums: number[]): number {
    if (nums.length < 3) {
        return -1;
    }

    let minValue: number = Infinity;
    let maxValue: number = -Infinity;
    let specialCandidate: number = -1;

    for (const num of nums) {
        if (num < minValue) {
            specialCandidate = minValue;
            minValue = num;
        } else if (num > maxValue) {
            specialCandidate = maxValue;
            maxValue = num;
        } else if (num !== minValue && num !== maxValue) {
            specialCandidate = num;
        }
    }

    return specialCandidate;
}
console.log(findNonMinOrMax([3,2,1,4]));
