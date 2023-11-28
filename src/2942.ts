function findWordsContaining(words: string[], x: string): number[] {
   let indece:number [] = [];
    words.forEach((word,index)=>{
        if(word.includes(x)){
            // console.log(index)
            indece.push(index);
        }
    })

    return indece;  
};

console.log(
findWordsContaining(["abc","bcd","aaaa","cbc"], 'a'))