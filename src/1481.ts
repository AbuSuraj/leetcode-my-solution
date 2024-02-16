function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    const map  = new Map<number,number>();

    for(let n of arr){
        map.set(n, (map.get(n)??0)+1);
    }
    const freqMap = [...map.values()].sort((a,b)=>a-b);
  
    let uniqueInt = 0;
    let i =0;

    while(k>0 && i <freqMap.length){
        if(k>=freqMap[i]){
            k -= freqMap[i];
            uniqueInt++;
        } else {break;}
        i++;
    }

    return freqMap.length-uniqueInt;
};
console.log(findLeastNumOfUniqueInts([4,3,1,1,3,3,2], 3));
