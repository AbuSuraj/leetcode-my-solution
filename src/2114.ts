// function mostWordsFound(sentences: string[]): number {
//     let wordsFound = -1;
//     sentences.forEach(sentence => {
//         const len = sentence.split(' ').length;
//           len> wordsFound ? wordsFound = len : ''
//         // console.log(wordsFound);
        
//     })
//     return wordsFound;
// };

// solution 2
function mostWordsFound(sentences: string[]): number {
    let wordsFound = -1;
    const len = sentences.map(sentence => {
         return sentence.split(' ').length;
        //   len> wordsFound ? wordsFound = len : ''
    })
         wordsFound = Math.max(...len)
        // console.log(wordsFound);
        
    return wordsFound;
};
console.log(mostWordsFound(["w jrpihe zsyqn l dxchifbxlasaehj","nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom","xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg","krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm","rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr","o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk","hrvh efqvjilibdqxjlpmanmogiossjyxepotezo","qstd zui nbbohtuk","qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc"]))