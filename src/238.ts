function productExceptSelf(nums: number[]): number[] {
    const len = nums.length;
     const result =  new Array(len).fill(1);
    let preFix = 1;
    let postFix = 1;
    for(let i = 0; i < len; i++) {
        result[i] = preFix;
        preFix *= nums[i];
    }
    for(let j=len-1; j>=0;j--){
        result[j] *= postFix;
        postFix *= nums[j];
    }
//     for(let i =1; i < len; i++) {
//         leftProduct[i] = leftProduct[i-1]*nums[i-1];
//         console.log(nums[i],' left product ', leftProduct[i],leftProduct[i-1], nums[i-1] );
        
//     }
//     for(let i = len-2; i >= 0; i--){
        
//         rightProduct[i] = rightProduct[i+1]*nums[i+1]
//         console.log('right ', rightProduct[i], rightProduct[i+1], nums[i+1]);
//     }

//    for(let i = 0; i < len; i++){
//     result[i] = leftProduct[i]*rightProduct[i];
//    }
    return result
};

console.log(productExceptSelf([1,2,3,4]));
