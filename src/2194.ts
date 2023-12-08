// function cellsInRange(s: string): string[] {
//   const ans: string[] = [];
//  const [startCol, startRow, endCol,endRow ] = s.match(/[A-Z]+|[0-9]+/g) ?? []
// //   console.log(startCol, startRow, endCol, endRow);
//   if (!startCol || !startRow || !endCol || !endRow) {
//     console.error("Invalid range format");
//     return [];
//   }
//   const startColIndex = startCol.charCodeAt(0) - 'A'.charCodeAt(0);
//    const endColIndex = endCol.charCodeAt(0)- 'A'.charCodeAt(0);
//    const startRowIndex = parseInt(startRow)
//    const endRowIndex = parseInt(endRow)
// //    console.log(startColIndex, endColIndex, startRowIndex, endRowIndex);
 
//    for(let colIndex = startColIndex; colIndex <=endColIndex; colIndex++){
//     for(let rowIndex = startRowIndex; rowIndex <= endRowIndex; rowIndex++){
//         // console.log(colIndex, rowIndex);
//         ans.push(String.fromCharCode('A'.charCodeAt(0)+ colIndex)+rowIndex)
        
//     }
//    }
//     return ans;
// };
function cellsInRange(s: string): string[] {
    const [startCell, endCell] = s.split(":");
    const [startCol, startRow] = startCell.split("");
    const [endCol, endRow] = endCell.split("");
    console.log(startCol, endCol, startRow, endRow);
    
    const result: string[] = [];
  
    for (let col = startCol.charCodeAt(0); col <= endCol.charCodeAt(0); col++) {
      const colStr = String.fromCharCode(col);
      for (let row = parseInt(startRow); row <= parseInt(endRow); row++) {
        result.push(`${colStr}${row}`);
      }
    }
  
    return result.sort(); // Sort in non-decreasing order by columns and rows
  }
  

console.log(cellsInRange("A1:F1"));
