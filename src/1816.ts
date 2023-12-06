function truncateSentence(s: string, k: number): string {
   
     
    return s.split(' ').slice(0,k).join(' ');
};

console.log(truncateSentence("Hello how are you Contestant", 4));
