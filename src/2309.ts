// function greatestLetter(s: string): string {
//   const uniqueLetter = new Set<string>(s);
//   let letters = new Set<string>()
//   let ans = ''
//   for (const char of uniqueLetter) {
//     const upperCaseVersion = char.toUpperCase();
//     const lowerCaseVersion = char.toLowerCase();
//                     // console.log(char);
//                     if(uniqueLetter.has(upperCaseVersion) &&  uniqueLetter.has(lowerCaseVersion)){
//                         letters.add(upperCaseVersion)
//                     }
                                 
//   }
//   letters.forEach(letter => ans += letter);
  
//   return  ans;
// }
function greatestLetter(s: string): string {
    const letterSet = new Set<string>();
    let greatest = '';
  
    for (const char of s) {
      const upperCaseVersion = char.toUpperCase();
      const lowerCaseVersion = char.toLowerCase();
  
      if (letterSet.has(upperCaseVersion) && letterSet.has(lowerCaseVersion)) {
        if (upperCaseVersion > greatest) {
          greatest = upperCaseVersion;
        }
      } else {
        letterSet.add(upperCaseVersion);
        letterSet.add(lowerCaseVersion);
      }
    }
  
    return greatest;
  }
console.log(greatestLetter("arRAzFif"));
 

 

