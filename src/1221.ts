function balancedStringSplit(s: string): number {
   let ans = 0;
   let left =0;
   for(let i = 0; i < s.length; i++){
    s[i] === 'L' ? left++ : left--;
    left ===0 ? ans++ : ''
   }
    return ans;
};
console.log(balancedStringSplit("RLRRRLLRLL"));
