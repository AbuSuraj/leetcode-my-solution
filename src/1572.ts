function diagonalSum(mat: number[][]): number {
  let sum = 0,n = mat.length;
  const mainDiagonal: number[] = [];
  const maiDiagonal: number[] = [];
  for (let i= 0;i<n; i++) {
    if(mat[i][i]!==undefined){
         mainDiagonal.push(mat[i][i]);
        sum += mat[i][i];
    }
    if(i !== n-1- i && mat[i][n-1-i] !== undefined){
        sum += mat[i][n-1-i];
        maiDiagonal.push(mat[i][n-1-i])
        
    }
  }
  console.log(mainDiagonal,maiDiagonal);
  
  return sum;  
};
console.log(diagonalSum([[1,2,3],
    [4,5,6],
    [7,8,9]]));
    