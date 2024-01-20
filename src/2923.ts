function findChampion(grid: number[][]): number {
  let maxIndex = 0, count =0, maxCount = 0;
  for(let i =0; i<grid.length; i++){
    for(let j=0;j <grid[0].length; j++){
        if(grid[i][j] ===1){
            count++;
        }
    }
    if(count>maxCount){
        maxCount = count;
        count =0;
        maxIndex = i;
    }
  }
    return maxIndex;  
};
console.log(findChampion([[0,1],[0,0]]));
