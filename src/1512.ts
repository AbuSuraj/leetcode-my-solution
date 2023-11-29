function numIdenticalPairs(nums: number[]): number {
   
    let c = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     for(let j=i+1; j < nums.length; j++){
    //         if(nums[i]  === nums[j]){c++}
    //     }
    // } 

    const numCount: {[key:number]: number} = {};
  let count = 0
    for (const num of nums){
        // console.log(num)
        if(num in numCount){
            count += numCount[num];
            numCount[num]++
            console.log(num, count, numCount[num])
        }
        else {
            numCount[num] = 1;
        }
    }
    return count;
};
console.log(numIdenticalPairs([1,1,1,1]))