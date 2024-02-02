function trimMean(arr: number[]): number {
    let sum = 0, i;
    const len = arr.length;
     const fivePercent =  len/20;
    //   arr.sort((a,b)=>a-b);
    //   console.log(arr, len, fivePercent);
      
      for( i = fivePercent; i<len-fivePercent; i++){
        // console.log(arr[i]);
        sum += arr[i];
      }
    //  console.log(sum, len, fivePercent);
     
    return  sum/(i);
};

console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))