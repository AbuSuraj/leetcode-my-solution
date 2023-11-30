function finalValueAfterOperations(operations: string[]): number {
 let sum = 0;
 operations.forEach(operation =>{
    operation==='X++' || operation==='++X' ? sum++ : sum--
 })
    return sum;
};

console.log(finalValueAfterOperations(["++X","++X","X++"]));
