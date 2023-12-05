function restoreString(s: string, indices: number[]): string {
//   let shuffleStr: { [index: number]: string } = []  ;
//   for (let i = 0; i < indices.length; i++) {
//         shuffleStr[indices[i]] = s[i]
//   }
// //   shuffleStr.toString()
//     return shuffleStr.toString().split(',').join('');
let shuffleStr:  string [] = []  ;
for (let i = 0; i < indices.length; i++) {
  const idx = indices[i]
      shuffleStr[indices[i]] = s[i]
}
     const ans =  shuffleStr.join('')
  return ans;
};

console.log(restoreString("codeleet",  [4,5,6,7,0,2,1,3]))