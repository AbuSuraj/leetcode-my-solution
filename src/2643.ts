function rowAndMaximumOnes(mat: number[][]): number[] {
let index = 0, count = 0;
let len1 = mat.length;
let len2 = mat[0].length;
let maxCount = 0;
let maxIndex = 0;
// console.log(len1, len2);
  
for(let i =0; i<len1; i++){
       count =0;
     for(let j =0; j <len2; j++){
        if (mat[i][j]===1){
            count++;
        }
     }
        if(maxCount<count){
            maxCount = count;
            maxIndex = i;
            count = 0;
        }
  }
    return [maxIndex, maxCount];
};
const mat1 = [[0,0],[1,1],[0,0]]
const mat2 = [[0,0,0],[0,1,1]];
const mat3 = [[0,1],[1,0]]
console.log(rowAndMaximumOnes(mat1));
console.log(rowAndMaximumOnes(mat2));
console.log(rowAndMaximumOnes(mat3));
