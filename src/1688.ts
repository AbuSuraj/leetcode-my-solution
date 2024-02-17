function numberOfMatches(n: number): number {
let matches = 0 ;
while(n >1){
    if(n %2 ===0){
        matches += n/2;
        n /=2;
        // console.log(matches,n);
    }
    else {
        matches += (n-1)/2;
        n = (n+1)/2;
        // console.log(matches);
    }
}
return matches;
};
console.log(numberOfMatches(7));
console.log(numberOfMatches(14));
