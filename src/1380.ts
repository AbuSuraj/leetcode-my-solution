function luckyNumbers (matrix: number[][]): number[] {
    let maxInColum     
        const result: number[] = [];
          console.log(matrix);
          
         
       for (let i = 0; i < matrix.length; i++) {
                    // console.log(...matrix[i]);
                    
           const minInRow = Math.min(...matrix[i]);
   
    
           const columnIndex = matrix[i].indexOf(minInRow);
                // console.log(columnIndex);
                
           const maxInColumn = Math.max(...matrix.map(row => row[columnIndex]));
            maxInColum = matrix.map(row => row[columnIndex]);
        //    console.log('col => ',maxInColumn);
           console.log(minInRow, maxInColumn);
           
           //    if (minInRow === maxInColumn) {
               //        result.push(minInRow);
               //    }
            //    console.log(maxInColum);
            }
    
       return result;
   

};
console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));
