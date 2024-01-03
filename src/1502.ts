function canMakeArithmeticProgression(arr: number[]): boolean {
//    let diff = new Set<number>();
//  const len = arr.length;
//  if (len < 3) return true;
//    arr.sort((a,b) =>a-b);
//    let diff2 = arr[1]- arr[0];
//     for(let i = 2; i < len-1; i++) {
//         if(arr[i+1] -arr[i]!==diff2) {return false}
//         // diff.add(arr[i+1] - arr[i])
//    } 
//    return true;
//    console.log(diff);
  arr.sort((a,b)=>a-b);
    if (arr.length<3){return true;}
    let r: number = arr[1]-arr[0];
    for(let i=2;i<arr.length;i++){
        if (arr[i]-arr[i-1]!=r){return false;} 
    }
    return true;
   
//   return diff.size === 1? true : false
};
console.log(canMakeArithmeticProgression([1,2,4]));
