function freqAlphabets(s: string): string {
  let result = '';
  let i = 0;
  while (i < s.length) {
    if(i+2 <s.length && s[i+2] === '#'){
        const mappedChar = String.fromCharCode(parseInt(s.substring(i,i+2))+96)
        result += mappedChar;
        i +=3;
    }
    else{
        const mappedChar = String.fromCharCode(parseInt(s[i])+96);
        result += mappedChar;
        i++;
    }
  }

    return result;
};
console.log(freqAlphabets("10#11#12"));
