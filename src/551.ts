function checkRecord(s: string): boolean {
//     let countAbsent = 0;
//     let countLate = 0;
//   for(let i=0; i<s.length; i++  ){
       
//       if(s[i] === 'A'){countAbsent++;}
//       if(countAbsent>=2){return false;}
//       if(s[i] === 'L' && s[i+1]=== 'L' && s[i+2]==='L'){return false;}
//   }  
//   return true
return s.includes('LLL') ? false: s.split('').filter(el => el==='A').length <2
};
console.log(checkRecord('AA'));
