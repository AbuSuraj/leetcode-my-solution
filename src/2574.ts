function leftRightDifference(nums: number[]): number[] {
const ans: number []= [];
const len = nums.length;
let leftSum = 0
let rightSum = 0
for(let i=0; i<len;i++){
    leftSum = 0;
    rightSum = 0
    for(let j = i-1; j>=0;j--){
        if(j<0){
            leftSum = 0;
        }
        leftSum += nums[j];
        console.log('left => ', nums[j], leftSum);
    }
    for(let j = i+1; j<len;j++){
        if(j>=len){
            rightSum = 0;
        }
        rightSum += nums[j];
        console.log('right => ',nums[j], rightSum);
    }
    ans.push(Math.abs(leftSum-rightSum));
}
return ans;
};

console.log(leftRightDifference([1]))