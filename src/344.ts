function reverseString(s: string[]): void {
    // s.reverse()
    let j=0;
      
    for(let  i= s.length - 1; i >= j; i--){
       let temp = s[i]; 
        s[i] = s[j]
        s[j] = temp;
        j++;
    }
     
    console.log(s);
    
 };

 console.log(reverseString(["h","e","l","l","o"]));
 