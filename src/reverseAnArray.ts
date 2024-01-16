const reversingArray = (arr: number[]):number[] =>{
const rA: number[] = [];
for( let i= arr.length -1, j=0; i>arr.length/2; i--, j++ ){
    // rA[j] = arr[i]
    const temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
}
    return arr
}
console.log(reversingArray([1,2,3]))