function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.length = m;
    console.log(nums1);
    
    nums2.length = n;
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
}

// Example usage:
let nums1: number[] = [ 0, 0, 0];
let m: number = 0;
let nums2: number[] = [2, 5, 7];
let n: number = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
