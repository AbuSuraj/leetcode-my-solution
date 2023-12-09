function isHappy(num: number): boolean {
    let result = 0;

    while (num > 0) {
        let r = num%10;
        console.log('r -> ', r);
        result += Math.pow(r,2)
        num = Math.floor(num / 10);
        console.log(num);
        
        if (num === 0 && result >= 10) {
            num = result;
            result = 0;
    } else if(num === 0 && result<10){
            // console.log('else', result);
            return true
        }
    }
    return result === 1 ? true : false;
  
};
console.log(isHappy(1111111));
