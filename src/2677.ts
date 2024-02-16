 function chunk(arr: number[]  , size: number): number[][] {
    const ans: number[][] = [];
    const len = arr.length;
    let i =0;
    while(i <len){
        let temp = arr.slice(i,i+size);
        // let j = len - size;
        // console.log(temp);
        ans.push(temp)
        i +=size;
        
    }
        
    return ans;
};
console.log(chunk([1,2,3,4,5], 1));
console.log(chunk( [1,9,6,3,2],3));
console.log(chunk( [8,5,3,2,6],6));
console.log(chunk( [],1));
