function luckyNumbers(matrix: number[][]): number[] {

    const result: number[] = [];
    console.log(matrix);


    for (let i = 0; i < matrix.length; i++) {


        const minInRow = Math.min(...matrix[i]);


        const columnIndex = matrix[i].indexOf(minInRow);


        const maxInColumn = Math.max(...matrix.map(row => row[columnIndex]));


        if (minInRow === maxInColumn) {
            result.push(minInRow);
        }

    }

    return result;


};
console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]));
