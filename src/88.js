function merge(nums1, m, nums2, n) {
    let pointer1 = m - 1; // Initialize pointer for nums1 at the end
    let pointer2 = n - 1; // Initialize pointer for nums2 at the end
    let mergedPointer = m + n - 1; // Initialize pointer for the merged array

    // Continue until either nums1 or nums2 is fully processed
    while (pointer1 >= 0 && pointer2 >= 0) {
        // Compare elements at the current pointers and place the larger one at the mergedPointer
        if (nums1[pointer1] > nums2[pointer2]) {
            nums1[mergedPointer] = nums1[pointer1];
            pointer1--;
        } else {
            nums1[mergedPointer] = nums2[pointer2];
            pointer2--;
        }
        mergedPointer--;
    }

    // If nums2 has remaining elements, copy them to nums1
    while (pointer2 >= 0) {
        nums1[mergedPointer] = nums2[pointer2];
        pointer2--;
        mergedPointer--;
    }
}

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
