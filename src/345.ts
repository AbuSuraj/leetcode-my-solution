function reverseVowels(s: string): string {
    const vowelSet = new Set('aeiouAEOUI');
    const vowel: string[] = [];
    let ans = ''
    const len = s.length
    for (let i = 0; i < len; i++) {
         if(vowelSet.has(s[i])) {
            vowel.push(s[i])
         }
    }
    // console.log(vowel);
    let j= vowel.length-1;
    for (let i = 0; i < len;i++){
        if(vowelSet.has(s[i])){
            ans += vowel[j--];
        }
        else {ans +=s[i]}
//   const char = vowel.pop()
//         console.log(char);
        
}
    return ans;
};
console.log(reverseVowels('hello'));
