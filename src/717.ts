function isOneBitCharacter(bits: number[]): boolean {
    let i = 0;

   // Iterate through the bits array
   while (i < bits.length - 1) {
       // If the current bit is 1, it means we have a two-bit character
       if (bits[i] === 1) {
           // Skip the next bit as it is part of the two-bit character
           i += 2;
       } else {
           // If the current bit is 0, it is a one-bit character, so move to the next index
           i++;
       }
   }
  
   // If we reach the end of the array, the last character must be a one-bit character
   return i === bits.length - 1;

};
console.log(isOneBitCharacter([1,0,0]));
