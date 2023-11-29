function shuffle(nums: number[], n: number): number[] {

let ans: number[] = [];

let j = n;
 for (let i = 0; i <n; i++){
    // ans[i] = nums[i];
    // ans[i+1] = nums[n+i];
    ans.push(nums[i]);
    ans.push(nums[n+i]);
    // console.log(ans[i], ans[i+1]);
 }
//  console.log(ans);
 
    return ans
};

console.log(shuffle([1,2,3,4,4,3,2,1], 4));