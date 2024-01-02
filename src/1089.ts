function duplicateZeros(arr: number[]): void {
   const len = arr.length;
   const ans: number[] = [];
   let j=0;
   for (let i = 0; i < len;i++){
       ans.push(arr[i]);
   if(arr[i] === 0){
    ans.push(0);
   }

    //    console.log(arr[i]);   
   } 
//    console.log(ans);
   for (let i = 0; i < len; i++){
    arr[i] = ans[i];
   }
   console.log(arr);
   
};
console.log(duplicateZeros([1,0,2,3,0,4,5,0]))