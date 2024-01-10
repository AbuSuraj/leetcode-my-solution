function validPalindrome(s: string): boolean {
  let count =0;
  let i =0, j= s.length-1;
  
    
    while (i < j) {
        if (s.charAt(i) != s.charAt(j)) {
            return isPalindromeS(s, i + 1, j) || isPalindromeS(s, i, j - 1);
        }
        i++;
        j--;
    }

    return true;
}

const isPalindromeS =(s:string, i:number, j:number): boolean =>{

    while(i<=j){
        if(s.charAt(i)===s.charAt(j)){i++; j--;
        // console.log(s.charAt(i));
        
        }
        else{
            return false
        //     count++;
        // if(count>1)
        // {return false;}
        }
      }
      return true;
}

console.log(validPalindrome('aba'));
