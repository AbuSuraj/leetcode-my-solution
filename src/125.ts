function isPalindrome(s: string): boolean {
   const string = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
//    console.log(string);
    let palString= '';
    for(let i= string.length-1;i>=0;i--){
        palString += string[i]
    }
    console.log(palString);
    
   
    return palString === string
};
console.log(isPalindrome("race a car"))