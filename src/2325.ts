// function decodeMessage(key: string, message: string): string {
//     const letterMap = new Map<string, string>(); 
//     let ans = '';
//  let characters = key.split('');
// let a = characters.filter(c => c !== ' ');

// // console.log(a);
//  let charSet = new Set(a)

// //  console.log(charSet);
 
//  let lettersArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode('a'.charCodeAt(0) + index));
// // console.log(lettersArray);
// let i =0;
// charSet.forEach((character, index)=>{
     
//      if(/^[a-z]$/.test(character)){
//         // console.log(index);
//         letterMap.set(character, lettersArray[i++]);

//     }
//  })  
// //  console.log(letterMap);
// // for(let [key, value ] of letterMap){
// //     console.log(key, value);
// // }
// for(let char of message){
//     if(char === ' '){
//         ans += ' ';
//     }
//     // console.log(char);
//     else {
//         ans += letterMap.get(char)
//     }
// }
 
//  return ans
// };

function decodeMessage(key: string, message: string): string {
    const letterMap = new Map<string, string>();
    let ans = '';
    const  letters = 'abcdefghijklmnopqrstuvwxyz';

    let i =0;

    for(let char of key){
        console.log(char);
        if(char !== ' '){

            if((char in letterMap)){
                continue;
            }
            else {
                letterMap.set(char, letters[i++])
            }
        }
    }
console.log(letterMap);

    for(let char of message){
        if(char === ' '){ans += ' '}
        else {
        ans += letterMap.get(char)
        }
    }
    return ans
};
console.log(decodeMessage("the quick brown fox jumps over the lazy dog",  "vkbs bs t suepuv"));
