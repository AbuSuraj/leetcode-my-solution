function replaceDigits(s: string): string {
  let ans = '';
  for(let j = 0; j < s.length; j++){
    if( j%2===0){
        ans += s[j] 
        
    }   else{
        ans +=  String.fromCharCode(s[j-1].charCodeAt(0)+ parseInt(s[j + 1], 10))
    }
}
 
  return ans
};
console.log(replaceDigits('a1b2c3d4e'));
