function arrayRankTransform(arr: number[]): number[] {
    const ans: number[] = [];
    const map = new Map<number, number>();
    const temp = [...arr];
    const len = arr.length;
    temp.sort((a,b) =>a-b);
    // console.log(arr, temp);
    
    for(let i=0, j=1; i<len; i++){
    
        if(! map.has(temp[i])){
            map.set(temp[i], j++);
        }
    }
    console.log(map);
    for(let i of arr){
        ans.push(map.get(i)??0);
    }
    
    return ans;
};
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));
