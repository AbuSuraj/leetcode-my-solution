function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0;
//   solution 1 with Map 
   const stonesMap = new Map();
   for(let stone of stones) {
    count =0;
    stonesMap.set(stone, (stonesMap.get(stone) || 0)+1);
   }
 
    // console.log(key,value)
    for(let jewel of jewels){
    //    console.log(stonesMap.get(jewel));
        count += stonesMap.get(jewel)??0
    
   }

// const stoneTpye: { [key: string]: number }  = {
// };
// for( let stone of stones){
//     count = 0;
//     if(stone in stoneTpye){
//     stoneTpye[stone]++;
//     }
//     else {
//         stoneTpye[stone] = 1;
//     }
// }
// for(let jewel of jewels){
//     if(jewel in stoneTpye){
//     console.log(jewel, stoneTpye[jewel])
//     count += stoneTpye[jewel]}
// }
  return count;  
};

console.log(numJewelsInStones("zz", "ZZZ"))