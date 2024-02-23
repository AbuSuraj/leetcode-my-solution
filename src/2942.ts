function findWordsContaining(words: string[], x: string): number[] {
//    let indece:number [] = [];
//     words.forEach((word,index)=>{
//         if(word.includes(x)){
//             // console.log(index)
//             indece.push(index);
//         }
//     })

//     return indece;

let ans:number[]= [];
console.log(words.length);

for(let i =0; i<words.length; i++ ){
    for(let char of words[i]){
        // console.log(char)
        if(char === x){
            
             ans.push(i); break;}
    }
  
}
return ans;
};

// console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], 'a'))
console.log(findWordsContaining(["leet","code"], 'e'))