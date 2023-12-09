function countAsterisks(s: string): number {
let ans = 0;
 let countBar = 0;
 let countAsterisk = 0;
for(let i =0; i < s.length; i++) {
 if(s[i] === '*' && countBar === 0){
    countAsterisk++;
    console.log('from1',  s[i], countAsterisk);
    
 }
else if( s[i] === '|' && countBar === 0){
    countBar++;
    console.log('from2',  s[i], countBar);
    
 }
else if( s[i] === '|' && countBar === 1){
    countBar--;
    console.log('from3',  s[i], countBar);
    
 }

}
return countAsterisk;
};
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
