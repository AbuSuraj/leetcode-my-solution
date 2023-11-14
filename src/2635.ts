// one solution
// function map(arr: number[], fn: (n: number, i: number) => number): number[] {
// 	const newArray = []
//     for ( let i =0; i <arr.length; i++){
//         newArray.push(fn(arr[i],i))
//     }
//     return newArray; 
// };

// another solution

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
	const newArray: number [] =  []
    for ( let i in arr){
        newArray.push(fn(arr[i],Number(i)))
    }
    // arr.forEach((ar, i)=>{
    //     newArray[i] = fn(ar, i)
    // })
    return newArray; 
};