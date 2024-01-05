function increasingTriplet(nums: number[]): boolean {
    let first = Infinity; // Initialize with a very large value
    let second = Infinity; // Initialize with a very large value

    for (const num of nums) {
        if (num <= first) {
            first = num; // Update first if the current number is smaller or equal
        } else if (num <= second) {
            second = num; // Update second if the current number is smaller or equal
        } else {
            return true; // If we find a number greater than both first and second, return true
        }
    }

    return false; // No triplet found
};
// console.log(increasingTriplet([1,2,3,4,5]));
// console.log(increasingTriplet([1,5,0,4,1,3]));
console.log(increasingTriplet([1,5,0,4,1,3]));
