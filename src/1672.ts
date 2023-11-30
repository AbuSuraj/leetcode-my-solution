function maximumWealth(accounts: number[][]): number {
    let sum = 0;
    let max = -1;
    accounts.forEach(account =>{
        // console.log(account)
        sum = 0;
        // account.forEach(acc => sum += acc)
        const s = account.reduce((acc, index)=> acc + index, 0)
        // console.log(sum);
        max < s ? max= s: ''
    })
    return max
};

console.log(maximumWealth( [[2,8,7],[7,1,3],[1,9,5]]));
