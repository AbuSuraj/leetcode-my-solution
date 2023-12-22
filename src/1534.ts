function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
let count = 0;
const len = arr.length;
for (let i = 0; i < len-2; i++){
    for (let j = i+1; j < len-1; j++){
        if(Math.abs(arr[i]-arr[j])<=a)
        for (let k = j+1; k < len; k++){
            // const ab = Math.abs(arr[i]-arr[j]);
            // const ac = Math.abs(arr[i]-arr[k]);
            // const bc = Math.abs(arr[j]-arr[k]);
            
            if( Math.abs(arr[i]-arr[k]) <=c && Math.abs(arr[j]-arr[k])<=b){
                // console.log(arr[i], arr[j], ' = ab ', ab, a);
                // console.log(arr[j], arr[k], ' = bc ', bc, b);
                // console.log(arr[i], arr[k], ' = ac ', ac, c);
                // console.log((arr[i], arr[j], arr[k]));
                
                count++}
        }
        // console.log('---');
        
    }
    // console.log('***');
    
}
// if(Math.abs(arr[i]-arr[i+1])<=a && Math.abs(arr[i]-arr[i+2])<=c && Math.abs(arr[i+1]-arr[i+2])<=b){count++}
// }
return count;
};
console.log(countGoodTriplets([ 1,1,2,2,3],   0,  0, 1));
console.log(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3));
console.log(countGoodTriplets([7,3,7,3,12,1,12,2,3],5,8,1));
