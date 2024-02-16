function plusOne(digits: number[]): number[] {
    const ans:number[] = [];
    let digit = 0;
    for(let i =0; i<digits.length; i++){
        digit = digit*10 + digits[i];
    }
    let newDigit = digit +1;
    while(newDigit >0){
        ans.push(newDigit%10);
         newDigit = Math.floor(newDigit/10);
    }
    // console.log(digit);
    
    return ans.reverse();
};

 console.log(plusOne([1,2,3]));
 