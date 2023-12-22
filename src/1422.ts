// function maxScore(s: string): number {
//     let maxScore = 0;
//     let zerosLeft = 0;
//     // console.log(s.split('1'));
//     const len = s.length
//     // let onesRight = s.split('1').length - 1;
//     let onesRight = len-1;
//     console.log(onesRight+1);
    
//     // Iterate through the string, excluding the last character
//     for (let i = 0; i < len - 1; i++) {
//         if (s[i] === '0') {
//             zerosLeft++;
//         } else {
//             onesRight--;
//         }

//         // Calculate the score for the current split
//         const currentScore = zerosLeft + onesRight;

//         // Update the maximum score
//         maxScore = Math.max(maxScore, currentScore);
//     }

//     return maxScore;
// }

function maxScore(s: string) {
    let maximum = Number.NEGATIVE_INFINITY;
    let onesAmount = 0;
    let zerosAmount = 0;
    const len = s.length;
    for (let i = 0; i < len - 1; i++) {
      if (s[i] === '1') {
        onesAmount++;
      } else {
        zerosAmount++;
      }
      maximum = Math.max(maximum, zerosAmount - onesAmount);
    }
    if (s[len - 1] === '1') {
      maximum++;
    }
    return maximum + onesAmount;
  }
// Example usage:
console.log(maxScore("011101")); // Output: 5
// console.log(maxScore("00111"));  // Output: 5
// console.log(maxScore("1111"));   // Output: 3
// console.log(maxScore("00"));   // Output: 3
