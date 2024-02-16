function rotate(nums: number[], k: number): void {
    const len = nums.length; 
    // solution1
    // for(let i =0; i<k; i++ ){
    //      const item =  nums.pop();
    //      nums.unshift(item);
    // }

    // solution 2 
    //  k %= len;
    //  const  rotatePart = nums.slice(len-k);
    //  const remainingPart = nums.slice(0, len-k);
   
    // nums.length = 0;
    // nums.push(...rotatePart, ...remainingPart);

    // solution 3 
    // k %=len;
    // const rotate = nums.splice(len-k);
    // nums.splice(0,0,...rotate);

    // solution 4 
    function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
 
    const n = nums.length;
    k %= n; // Handle cases where k is greater than array length

    reverse(nums, 0, n - 1); // Reverse the entire array
    reverse(nums, 0, k - 1); // Reverse the first k elements
    reverse(nums, k, n - 1); // Reverse the remaining elements
  
}
console.log(rotate([1,2,3,4,5,6,7], 3));
