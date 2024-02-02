// function isAnagram(s: string, t: string): boolean {
//    const tempS=  s.split('');
//    tempS.sort();
//    const temSSorted = tempS.join('');
//    const tempT=  t.split('');
//    tempT.sort();
//    const temTSorted = tempS.join('');
 
//     // console.log(temSSorted,temTSorted);
    
//     return temSSorted === temTSorted;
// };
function isAnagram(s: string, t: string): boolean {
    const lenS = s.length, lenT = t.length, map = new Map<string,number>();
    if(lenS!==lenT)return false;

    for(let i = 0; i<lenS; i++){
           map.set(s[i], (map.get(s[i])??0)+1);
    }
    for(let i = 0; i<lenS; i++){
       if(!map.has(t[i])){
            return false;
       }
       if(map.has(t[i])){
           map.set(t[i],(map.get(t[i])??0)-1);
       }
    }
    console.log(map);
    
    return [...map.values()].every(f => f===0);
};
console.log(isAnagram("anagram", "nagaram"));
