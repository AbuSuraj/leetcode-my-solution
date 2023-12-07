
 function countKDifference(nums: number[], k: number): number {
     // Step 1: Create a frequency map using an object
     let map: Record<number, number> = {};
     for (let i of nums) {
         // Increment the count for each element in the array
         map[i] ? map[i]++ : map[i] = 1;
     }
 
     // Step 2: Initialize a variable to store the count of pairs
     let pairs = 0;
 console.log(nums);
 console.log(map);
 
     // Step 3: Iterate through the array to find pairs with absolute difference k
     for (let i = 0; i < nums.length; i++) {
         // Check if there exists an element nums[j] such that nums[j] - nums[i] === k
         if (map[nums[i] - k]) {
             // Increment the pairs count by the frequency of nums[j]
             console.log('nums[i]', nums[i],map[nums[i]],k,map[nums[i] - k]);
             
             pairs += map[nums[i] - k];
         }
     }
 
     // Step 4: Return the total count of pairs
     return pairs;
//         let ans = 0;
//         const numFrequency: { [key: number]: number } = {};

//         for (let i = 0; i < nums.length; i++) {
//             const val1 = numFrequency[nums[i] + k] || 0;
//             const val2 = numFrequency[nums[i] - k] || 0;
//             ans += val1 + val2;

//             // Adding nums[i] into the map
//             if (numFrequency.hasOwnProperty(nums[i])) {
//                 numFrequency[nums[i]]++;
//             } else {
//                 numFrequency[nums[i]] = 1;
//             }
//         }

//         return ans;
    }
console.log(countKDifference([1,2,2,1], 1));
