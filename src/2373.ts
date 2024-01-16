function largestLocal(grid: number[][]): number[][] {
    const n = grid.length;
    const maxLocal: number[][] = [];

    for (let i = 1; i < n - 1; i++) {
        const row: number[] = [];

        for (let j = 1; j < n - 1; j++) {
            // Find the maximum value in the 3x3 submatrix
            const submatrix = [
                grid[i - 1][j - 1], grid[i - 1][j], grid[i - 1][j + 1],
                grid[i][j - 1], grid[i][j], grid[i][j + 1],
                grid[i + 1][j - 1], grid[i + 1][j], grid[i + 1][j + 1]
            ];

            // Find the maximum value using Math.max
            const maxValue = Math.max(...submatrix);
            // console.log(maxValue);
            
            row.push(maxValue);
        }
        console.log(row);
        
        maxLocal.push(row);
    }

    return maxLocal;
};
console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]));
