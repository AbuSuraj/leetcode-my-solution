function productExceptSelf(nums: number[]): number[] {
    const len = nums.length;
    // const leftProduct: number[] = [];
    // const rightProduct: number[] = [];
    const result: number[] = new Array(len).fill(1);
   let leftProduct = 1
   let rightProduct= 1;
    result.fill(1, 0, len)
    console.log(result);
    
   for(let i=0; i<len; i++) {
    result[i] *= leftProduct;
    leftProduct *= nums[i];
   }

   for(let i=len-1; i>=0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
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
