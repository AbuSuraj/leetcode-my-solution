function halvesAreAlike(s: string): boolean {
  let countVowel = 0;
  const len = s.length
  const vowelSet = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
 for(let i =0; i<len; i++){
    if(i<=Math.floor(len/2)-1){
        
        
      if(vowelSet.has(s[i])){countVowel++}
    }
    else if(i>=Math.floor(len/2)){
        
        if(vowelSet.has(s[i])){countVowel--;}
    }
 }
//  console.log(countVowel);
 
 return countVowel === 0 ? true: false 
};
console.log(halvesAreAlike('textbook'));
