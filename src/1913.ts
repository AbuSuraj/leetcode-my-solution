function maxProductDifference(nums: number[]): number {
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;
  
    for (const num of nums) {
      if (num > max1) {
        max2 = max1;
        max1 = num;
        console.log('max1 & max2 ',max1, max2);
        
      } else if (num > max2) {
        max2 = num;
        console.log('max2 ',max2);
        
      }
  
      if (num < min1) {
        min2 = min1;
        min1 = num;
        console.log('min1, min2 ',min1, min2);
        
      } else if (num < min2) {
        min2 = num;
        console.log('min2 ',min2);
        
      }
    }
  
    return max1 * max2 - min1 * min2;
};

console.log(maxProductDifference([5,6,2,7,4]));
