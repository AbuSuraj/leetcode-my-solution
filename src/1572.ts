function diagonalSum(mat: number[][]): number {
  let sum = 0,n = mat.length;
  const mainDiagonal: number[] = [];
  const maiDiagonal: number[] = [];
  for (let i= 0;i<n; i++) {
    if(mat[i][i]!==undefined){
       
        sum += mat[i][i];
    }
    if(i !== n-1- i && mat[i][n-1-i] !== undefined){
        sum += mat[i][n-1-i];
 
    }
  }

  
  return sum;  
};
console.log(diagonalSum([[1,2,3],
    [4,5,6],
    [7,8,9]]));
    