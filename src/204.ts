function countPrimes(n: number): number {
    let c=0, flag = true;
    if(n<=1) return 0;
    const isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for(let i =2; i*i<n; i++){
        for(let j = i*i; j<n; j +=i){
            if(isPrime[j]){
                isPrime[j] = false;
            }
        }
    }
    for(let i of isPrime){
        if(i)c++;
    }
    return c;
};
console.log(countPrimes(20));
