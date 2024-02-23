function countConsistentStrings(allowed: string, words: string[]): number {
let count =0, consistant = false;
const allowedSet = new Set<string>(allowed);

for(let word of words){
    // console.log(word);
    consistant = true;
    for(let char of word){
         if(!allowedSet.has(char)){consistant = false;}
       
    }
    if(consistant)count++;
}
return  count;
};
console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));
console.log(countConsistentStrings("fstqyienx", ["n","eeitfns","eqqqsfs","i","feniqis","lhoa","yqyitei","sqtn","kug","z","neqqis"]));