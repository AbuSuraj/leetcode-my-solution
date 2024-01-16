function findFrquency(arr: number[]){
 let  freqMap = new Map<number, number>();
    for(let i =0; i < arr.length; i++){
        if(freqMap.has(arr[i])){
            freqMap.set(arr[i],(freqMap.get(arr[i]) ?? 0)+1)
        }
        else {
            freqMap.set(arr[i],1)
        }
    }
    

    console.log(freqMap);
    
}
console.log(findFrquency([1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10]));
