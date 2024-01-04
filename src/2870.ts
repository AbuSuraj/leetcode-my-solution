function minOperations(nums: number[]): number {
let ans = 0;
const numberMap = new Map<number, number |any >();
for(const number of nums) {
    if(numberMap.has(number)){
        numberMap.set(number, (numberMap.get(number))+1)
    }
    else{
        numberMap.set(number,1)
    }
}
 
for(let [index, value] of numberMap){
    if( value === 1){ans = -1; break;}

    ans += Math.floor(value/3);
if(value %3 !==0)ans++
//      if(value%3 === 0){
//     ans += (value/3);
//    }
//    if (value % 3 === 1 || value % 3 === 2) {
//     ans += Math.floor(value / 3) + 1;}
}

return ans;
};
// console.log(minOperations([2,1,2,2,3,3]));
// console.log(minOperations([14,12,14,14,12,14,14,12,12,12,12,14,14,12,14,14,14,12,12]));
console.log(minOperations([14,12,14,14,12,14,14,12,12,12,12,14,14,12,14,14,14,12,12]));
