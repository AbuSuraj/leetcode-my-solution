// solution -1 efficient 
// function reverseWords(s: string): string {
// //  let an  = ' ';
// //     s.split(' ').forEach((ss, i) =>{
// //             an += ss.split('').reverse().join('');
             
// //             an += ' '
             
// //         });
// //     an.trim()

// //     return an.trim();   
// }

// solution 2, using two poitners 
function reverseWords(s:string):string{
    const newS= s.split(' ')
    for(let word=0; word< newS.length; word++){
        newS[word] = reverse(newS[word])
    }
    return newS.join(' ');
} 

function reverse(s: string): string {

    // 1. Split the word into an array of characters
    const word = s.split('')
    
    // 2. Initialize our two pointers, left and right
    for (let left = 0, right = word.length - 1; left < right; left++, right--) {
    // 3. Swap the left and right characters with the help of a temp variable
    const temp = word[left]
    word[left] = word[right]
    word[right] = temp;
    
    // 4. Increment left and decrement right to move towards the middle of the array
    // 5. Repeat the loop while left < right
    // (The above steps are implemented in the definition of the for loop)
}

// 6. Join the array and return it as a string
return word.join('')
}
console.log(reverseWords("Let's take LeetCode contest"))