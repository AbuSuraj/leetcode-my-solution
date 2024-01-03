function numberOfBeams(bank: string[]): number {
  let total = 0;
  let prevRowCount = 0;
  for(const row of bank){
    const currentRowCount = row.split('').reduce((count, c) =>count + parseInt(c),0);
    if( currentRowCount === 0){continue;}

    total +=currentRowCount * prevRowCount;
    prevRowCount = currentRowCount;
  }
    return total
};
console.log(numberOfBeams(["011001","000000","010100","001000"]));
