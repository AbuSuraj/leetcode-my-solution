function numOfStrings(patterns: string[], word: string): number {
return patterns.filter(pattern =>word.includes(pattern)).length
    // let count = 0; 
    // for (let i = 0; i < patterns.length; i++) {
        
    //     if( word.includes(patterns[i])){
    //         count++;
    //         }
    // }
    // return count;
};

console.log(numOfStrings(["a","a","a"],"ab"));
