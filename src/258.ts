function addDigits(num: number): number {
 if(num === 0) return 0;

 if(num%9 ===0) return 9;
 else return num % 9;
};

console.log(addDigits(38));
