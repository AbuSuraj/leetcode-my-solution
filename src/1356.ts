function sortByBits(arr: number[]): number[] {
 
    const bits = arr.map((num) =>{
        let count =0;
        while(num>0){
            count = count + num & 1;
            num >>=1;
        }
        return count;
    })


    
    return arr
};
console.log(sortByBits([0,1,2,3,4,5,6,7,8]));
