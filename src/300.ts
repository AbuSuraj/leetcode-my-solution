// function lengthOfLIS(nums: number[]): number {
//     const length = nums.length;
//  const tails: number[] = [];
  
//  for (let num of nums) {
//     let left = 0, right = tails.length;
//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         // console.log(tails[mid]);
//         if (tails[mid] < num) { 
//             left = mid + 1;
//         } else {
//             right = mid; 
//         }
//     }
//     tails[left] = num; 
    
// } 

// return tails.length;  
// };

function lengthOfLIS(nums: number[]): number{
    const len = nums.length;
    const dp = new Array(len).fill(1);

    for(let i =0; i < len; i++){
        for(let j=0; j<i; j++){
            if(nums[i]> nums[j]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }
    console.log(dp);
    
    return Math.max(...dp)
}
console.log(lengthOfLIS([1,7,8,4,5,6,-1,9]));
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));

/*
/**
  
var lengthOfLIS = function(nums) {
    let tails = [];

    for (let num of nums) {
        let left = 0, right = tails.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        tails[left] = num;
    }

    return tails.length;
};
*/ 