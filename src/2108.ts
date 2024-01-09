function firstPalindrome(words: string[]): string {
    
    for(let word of words){
        let j =0;
        let pal = '';  
        // for(let i = word.length-1; i >=0 ; i--){
        //   pal += word[i];
        // } 
        pal = word.split('').reverse().join('') 
        if( pal === word){return word;}
    }
    return ''
};
console.log('ans ', firstPalindrome(["abc","car","ada","racecar","cool"]));
