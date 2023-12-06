function differenceOfSum(nums: number[]): number {
    let sum =0;
    let elementsSum = 0;
    let digitsSum = 0;
    for(let n of nums) {
        elementsSum += n;
       while(n >0){     
            digitsSum += n %10;
             n = Math.floor( n/10);
        }
    }
    
    
return Math.abs(digitsSum- elementsSum);
};

console.log(differenceOfSum([1,15,6,3]));
