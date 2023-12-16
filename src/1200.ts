function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a, b) =>a-b);
    // console.log(arr);
    const len = arr.length;
    // const diff = arr[1] - arr[0];
    // console.log(diff);
    const ans: number [][] = []
    let min =  Infinity;
    for(let i = 0; i <len-1; i++) {
        min = Math.min(min,arr[i+1]-arr[i]);
        // if(arr[i+1]-arr[i] === diff){
        //     ans.push([arr[i], arr[i + 1]])
        // }
    }
    for(let i = 0; i <len-1; i++) {
        
        if(arr[i+1]-arr[i] === min){
            ans.push([arr[i], arr[i + 1]])
        }
    }
    // console.log(min);
    
    return ans;
}
console.log(minimumAbsDifference( [3,8,-10,23,19,-4,-14,27]));
