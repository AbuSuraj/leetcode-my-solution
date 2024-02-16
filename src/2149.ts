type numberType = number[];
function rearrangeArray(nums: number[]): number[] {
  const negNum:numberType = [];
  const posNum:numberType = [];
  const ans:numberType = [];
for(let n of nums){
    n >=0 ? posNum.push(n) : negNum.push(n);
}
 
for(let i =0; i<posNum.length; i++){
    ans.push(posNum[i], negNum[i])   
}

  return ans; 
};

console.log(rearrangeArray([3,1,-2,-5,2,-4]));
console.log(rearrangeArray([1,-1]));
