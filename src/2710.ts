function removeTrailingZeros(num: string): string {    
    for(let i = num.length-1; i>=0; i--){
        if(num[i] ==='0'){
            num = num.slice(0,-1)
        }
        else{break}
    }
    return num;
};
console.log(removeTrailingZeros("51230100"));
