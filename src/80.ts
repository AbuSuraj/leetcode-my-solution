function removeDuplicates(nums: number[]): number {
    const len = nums.length;
    if( len <=2) return len;
    let index =2, k=0;
    for(let i = 2; i< len; i++){
        // console.log(nums[2],i, k++)
        if(nums[i]!== nums[index-2]){
            nums[index++] =nums[i]
        }
    }
    console.log(nums);
    
    return index;
    // let index = 1; 
    // let occurance =1;
    // for(let i = 1; i < nums.length; i++){
    //     if(nums[i] === nums[i-1]){
    //         occurance ++;
    //     } else{occurance =1}
    //     if(occurance<=2){
    //         nums[index++] = nums[i];
         
    //     }
    // }
    // return index
};

console.log(removeDuplicates([1,2,3,3]));
