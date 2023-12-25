function minOperations(s: string): number {
    let count0 = 0;
    let count1 = 0;

    // Iterate through the string and count operations for both patterns
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
          if (i % 2 === 0) {
            count0++;
          } else {
            count1++;
          }
        } else {
          if (i % 2 === 0) {
            count1++;
          } else {
            count0++;
          }
        }
      }

    // Return the minimum of the two patterns
    return Math.min(count0, count1);
    // let count0 =0;
    // let count1 =0;
    // const ss: string [] = []
    // s.split('').forEach(char =>{
    //     ss.push(char)
    // })
    // console.log(ss);
    
    // for(let i = 0; i < ss.length-1;i++){
    //     if(ss[i]=== '0' && ss[i]===ss[i+1]){
    //         // if()
    //          ss[i+1] = '1';
    //         // console.log(s[i]);
    //         count0++
    //     }
    //     else if(ss[i]=== '1' && ss[i]===ss[i+1]){
    //         // if()
    //          ss[i+1] = '0';
    //         // console.log(s[i]);
    //         count1++
    //     }
    // }
    // return Math.min(count1, count0)
};
console.log(minOperations("1111"));
