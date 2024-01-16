const findMaxMin =(ar: number[]): number [] =>{
let max1 = -Infinity,max2 = -Infinity, min1 = Infinity, min2 = Infinity;
for( let number of ar ){
    if(number> max1){
        max2 = max1
        max1 = number;
     } else if(number>max2 && number !== max1){
            max2 = number;
        }
    
    if(number< min1){
       min2 = min1
        min1 = number;
    } else if(number< min2 && number !== min1){
        min2 = number;}
}
console.log(max1,max2);

    return [max1, max2,min1,min2];
}
console.log(findMaxMin([3,5,10,6,1,9,2,1,10,4]));
