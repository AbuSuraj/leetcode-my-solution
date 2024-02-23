function maximum69Number (num: number): number {
    let ans = 0;
    const digit: number [] = [];

    while(num >0){
        const temp = num % 10;
        digit.unshift(temp)
        num = Math.floor(num/10);
    }
    let c=0;
    for(let i=0; i<digit.length; i++){
        if(c===0 && digit[i] ===6){
            digit[i] = 9;
            c++;
            // console.log(digit[i]);
            
            break;
        }
    }
    let k =1;
    for(let i = digit.length-1; i>=0; i--){
        ans += (digit[i]*k);
        k = k*10;
    }
    // console.log(digit);
    
    return ans;
};
console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
