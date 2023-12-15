function countElements(nums: number[]): number {
    let count : number=0
    let min :number = Math.min(...nums)
    let max : number = Math.max(...nums)

    nums.forEach((el)=>{
        console.log(el);
        
        if(el<max && el > min)count++
    })
    

    return count
    //     let count = 0;
//     const len = nums.length;
//     nums.sort((a, b) =>a-b);
//     for( let i =0; i < len; i++){
//         let hasSmaller  = false;
//         let hasGreater  = false;
//         for( let j = 0; j < nums.length; j++){
//             if(i!==j){
//                 if(nums[j] > nums[i]){
//                    hasGreater = true; 
//                 }
//                 else if(nums[j] < nums[i]){
//                     hasSmaller = true;
//                 }
//             }
//         }
//         if(hasSmaller && hasGreater){count++}
//     }
//    return count
   };
   console.log(countElements([-3,3,3,90]));
   