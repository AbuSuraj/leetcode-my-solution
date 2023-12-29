function finalString(s: string): string {
//   let ans ='';
//     for (let i = 0; i < s.length; i++) {
//         if(s[i] ==='i'){
//            ans = ans.split('').reverse().join('');
//         }
//        else ans += s[i]
//     }
//   return ans;
let ans: string [] = [];
for(let i = 0; i < s.length; i++) {
    if(s[i] === 'i'){ans.reverse()}
    else {ans.push(s[i]);}
}
return ans.join('')
};
console.log(finalString('poiinter'));
