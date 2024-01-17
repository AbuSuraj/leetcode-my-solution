function mergeAlternately(word1: string, word2: string): string {
let ans = '';
const length = word1.length,  length2 = word2.length;
const len = length >= length2 ? length : length2;
console.log(len);

for(let i = 0; i < len; i++) {
  if(word1[i] !== undefined){
    ans += word1[i]
  }
  if(word2[i] !== undefined){
    ans += word2[i];
  }
}
return ans
};
console.log(mergeAlternately('ab', 'pqrs'));

// 01711781947
// Declarative code to find the first even number greater than 5
function findFirstEvenGreaterThanFiveDeclarative(numbers: number []) {
    return numbers.find((number: number) => number > 5 && number % 2 === 0);
  }
  
  const numbers7 = [3, 7, 2, 8, 4];
  console.log(findFirstEvenGreaterThanFiveDeclarative(numbers7)); // Output: 8
  
