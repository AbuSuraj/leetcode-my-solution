function interpret(command: string): string {
 
let ans: string  = '';

// for (let i = 0; i < command.length; i++) {
//     if(command[i] === 'G'){ans += 'G'}
//     else if(command[i] === '(' && command[i+1] === ')'){
//      ans += 'o'
//     }
         
//     else if(command[i] === '(' && command[i+1] === 'a' && command[i+2] === 'l' && command[i+3] === ')'){
//          ans += 'al';
//     }
     
//     // console.log(command[i],ans);
    
// }
// return ans;

return command
.replace(/G/g, 'G')
.replace(/\(\)/g, 'o')
.replace(/\(al\)/g, 'al')
};
const x = interpret("G()()(al)");
console.log(x);
