function uniqueOccurrences(arr: number[]): boolean {
const occuranceMap = new Map<number, number>();
const uniqueMap = new Map<number, number>();
for(let n of arr){
    if(occuranceMap.has(n)){
        occuranceMap.set(n,(occuranceMap.get(n) ?? 0)+1)
    }
    else{
        occuranceMap.set(n,1)
    }
}
for(let [index, value] of occuranceMap){

    if(uniqueMap.has(value)){
        console.log('ache');
      return false;
    }
    else{
        uniqueMap.set(value,value)
    }
    
}
// console.log(occuranceMap);

    return true
};
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))