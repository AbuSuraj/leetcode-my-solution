function twoSum(numbers: number[], target: number): number[] {
  let left =0, right = numbers.length-1;
  
//   while (left < right) {
//     const sum = numbers[left]+numbers[right];
//     if(sum === target){
//         return [left+1, right+1];
//     }
//     else if( sum<target){
//         left++;
//     }
//     else{right--;}
//   }
const map = new Map<number, number>();
for(let i=0; i<right+1;i++){
    const item = target - numbers[i];
    if(map.has(item)){
        return [(map.get(item)??0)+1, i+1]
    }
    else {
        map.set(numbers[i],i)
    }
}
return [ ];
};
console.log(twoSum([-1,0], -1));
