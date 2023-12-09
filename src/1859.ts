// sorting the sentence 
function sortSentence(s: string): string {
const ans: {[key: number]: string} = {};
let sentence = ''
let len = 0; 
s.split(' ').forEach(word =>
    ans[parseInt(word[word.length - 1])] = word.slice(0,word.length-1)
    )
   const keys =  Object.keys(ans)
    len = keys.length
     
    for( let i in ans){
// console.log(ans[i]);
       sentence  +=  ans[i];
       if (+i<len){
        sentence += ' '
       }
    }
return sentence 
};

console.log(sortSentence("is2 sentence4 This1 a3"))
