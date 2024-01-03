function duplicateZeros(arr: number[]): void {
    
    const n = arr.length;
  let i = 0;
  let j= n - 1;
// [1,0,2,3,0,4,5,0]
  while (i < n) {
    if (arr[i] === 0) {
      while (j > i) {
        arr[j] = arr[j - 1];
        j--;
        console.log(arr);
      }
      i += 2;
      j = n - 1;
    } else {
      i++;
    }
  }
    // solution 2  
    // let len = arr.length;
    // for (let i = 0; i < len; i++){
    //     if (arr[i] === 0){
    //         arr.splice(i,0,0);
    //         i++;
    //         len--;
    //     }
    // }
    
//    const len = arr.length;
//    const ans: number[] = [];
//    for (let i = 0; i < len;i++){
//        ans.push(arr[i]);
//    if(arr[i] === 0){
//     ans.push(0);
//    }
//    } 

//    for (let i = 0; i < len; i++){
//     arr[i] = ans[i];
//    }
   
};
console.log(duplicateZeros([1,0,2,3,0,4,5,0]))