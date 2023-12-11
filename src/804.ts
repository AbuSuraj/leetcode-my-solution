function uniqueMorseRepresentations(words: string[]): number {
    const count = 0;
    const morseCodeMap: {[key:string]: string} = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..'
      };
const uniqueMorseRepresentation = new Set();
 for(const word of words){
     let val = '';
    //  console.log(word);
     
     for(let i = 0; i < word.length; i++){
        val += morseCodeMap[word[i]];
         
        
        }
        uniqueMorseRepresentation.add(val);
        // console.log(val);
        
        }
     
    // console.log(uniqueMorseRepresentation);
    
     return uniqueMorseRepresentation.size; 
};

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]));
