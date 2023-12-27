function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const nums1Set = new Set(nums2)
    const nums2Set =  new Set(nums1)
    const result: number[] = [];
    let c1=0
    let c2=0
    // console.log(nums1Map, nums2Map);
    for(let n of nums1){
        // console.log(n);
        
        if(nums1Set.has(n)){
            c1++
        }
    }
    for(let n of nums2){
        if(nums2Set.has(n)){
            c2++;
        }
    }

  return [c1, c2]
};
console.log(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6]));
