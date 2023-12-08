// function isAcronym(words: string[], s: string): boolean {
//     let temp = '';
//     for( let i in words ){
//         temp += words[i][0]
        
//     }
//     return temp === s
// };
// function isAcronym(words: string[], s: string): boolean {
//     const wLen = words.length;
//     if(wLen!== s.length) return false; 
//     for( let i =0; i<wLen; i++ ){
//          if(words[i][0] !== s[i]) return false;
        
//     }
//     return true
// };
function isAcronym(words: string[], s: string): boolean {
    return words.map(word => word[0]).join('') === s;
}
