function uniqueOccurrences(arr: number[]): boolean {
const occuranceMap = new Map<number, number>(); 
for(let n of arr){
    if(occuranceMap.has(n)){
        occuranceMap.set(n,(occuranceMap.get(n) ?? 0)+1)
    }
    else{
        occuranceMap.set(n,1)
    }
}
const  unqieSet = new Set([...occuranceMap.values()]);
// console.log(unqieSet, occuranceMap.size);

 
// console.log(occuranceMap);

    return unqieSet.size === occuranceMap.size
};
console.log(uniqueOccurrences([-3, 1]))