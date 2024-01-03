function reversePrefix(word: string, ch: string): string {
    for (let i = 0; i < word.length; i++){
        if (ch === word[i]){
            const revPrefix = word.substring(0, i+1).split('').reverse().join('');
            return revPrefix + word.substring(i+1);
        }
    }
    return word
//   let ans = '';
// //   console.log(word.indexOf(ch));
// const index = word.indexOf(ch);
// for(let i = index; i>=0; i--){
//     ans += word[i]
// }
// for( let i = index+1; i<word.length; i++){
//     ans += word[i]
// }
  
//     return ans;
};
console.log(reversePrefix("xyxzxe", 'z'));
