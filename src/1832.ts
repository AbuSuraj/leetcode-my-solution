function checkIfPangram(sentence: string): boolean {
  
    let englishLetterMap = new Map<string, number> ();
    let sum=0;
    for(let i =0; i<26;i++){
        const letter = String.fromCharCode('a'.charCodeAt(0)+i);
        englishLetterMap.set(letter, 0);
    }
    // console.log(englishLetterMap);
    
    for( let char of sentence){
        
        if(!(char in englishLetterMap)){
                // console.log(englishLetterMap.get(char));
                englishLetterMap.set(char,1);
                
        }
        
    }
    // console.log(englishLetterMap);
    for(let [index, value] of englishLetterMap.entries()){
        // console.log(index, value);
        sum+=value;
    }
    
    return sum === 26
};
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
