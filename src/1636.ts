function frequencySort(nums: number[]): number[] {
    const freqMap = new Map<number, number>();
    for(let n of nums){
        freqMap.set(n, (freqMap.get(n)??0)+1);
    }
    // console.log(freqMap);
    nums.sort((a, b) => {
        if (freqMap.get(a) !== freqMap.get(b)) {
            return freqMap.get(a)! - freqMap.get(b)!; // Sort by frequency in increasing order
        } else {
            return b - a; // If frequencies are equal, sort by value in decreasing order
        }
    });

    return nums;
};
console.log(frequencySort([1,1,2,2,2,3]));
// console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]));
