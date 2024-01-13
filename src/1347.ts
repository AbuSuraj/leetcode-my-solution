function minSteps(s: string, t: string): number {
    const freq: number[] = Array(26).fill(0);
    let ans = 0;
    const n = s.length;
  
    for (let i = 0; i < n; i++) {
        console.log(s.charCodeAt(i), 'a'.charCodeAt(0), s.charCodeAt(i)-'a'.charCodeAt(0))
      freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
  
    for (let i = 0; i < 26; i++) {
      if (freq[i] > 0) {
        console.log(i, freq[i]);
        
        ans += freq[i];
      }
    }
  
    return ans;
  }
  
  const result = minSteps("leetcode", "practice");
  console.log(result);
  
// solution 2 
// function minSteps(s: string, t: string): number {
//   let count = 0;
//   const len = s.length
//   const frequencyMap = new Map<string, number>();
//   const tMap = new Map<string, number>();
   
//      for (const char of s) {
//     if (char.match(/[a-zA-Z]/)) {
//       const lowercaseChar = char.toLowerCase();
//       frequencyMap.set(lowercaseChar, (frequencyMap.get(lowercaseChar) ?? 0) + 1);
//     }
//   }
//      for (const char of t) {
//     if (char.match(/[a-zA-Z]/)) {
//       const lowercaseChar = char.toLowerCase();
//       frequencyMap.set(lowercaseChar, (frequencyMap.get(lowercaseChar) ?? 0) - 1);
//     }
//   }
//  for(let val of frequencyMap.values())
// {
//     if(val>0) count +=val
// } 
//   return count;  
// };
// console.log(minSteps("bab", "aba"));
 
