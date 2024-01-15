function findWinners(matches: number[][]): number[][] {
  const ans0 = new Map<number, number>();  
  const ans1 = new Map<number, number>();
  for( let [i, j] of matches ) {
        // console.log(i,j);
        if(ans0.has(j)){
            ans0.delete(j);
        }
        if(!(ans0.has(i))){
            ans0.set(i,i)
        }
     if(ans1.has(j)){
        ans1.set(j, (ans1.get(j)??0)+1)
     }    else if(!(ans1.has(j))){
        ans1.set(j, 0)
     } 
  } 
  const temp0: number [] = []
  const temp1: number [] = []
for( let i of ans0.values()){
   temp0.push(i)
}
for(let [i,v] of ans1){
    // console.log(i, v);
    if(v === 1){
        
        temp1.push(i);}
}
  return [temp0, temp1];
};
console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]));
