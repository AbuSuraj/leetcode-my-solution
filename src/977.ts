function sortedSquares(nums: number[]): number[] {
    const ans: number[] = [];
    let i =0, j = nums.length-1, p=j; 
    while(p>=0) {
        if( Math.abs(nums[i]) >= Math.abs(nums[j])){
            ans[p--] = nums[i]*nums[i];
            i++;
        }
        else {
            ans[p--]= nums[j]*nums[j];j--
        }
        
    }
return ans;
    
}
console.log(sortedSquares([2,11,4,1,5]));
