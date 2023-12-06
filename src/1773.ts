function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  const ruleIndex = { 'type': 0, 'color': 1, 'name': 2 }[ruleKey];
  
  if (ruleIndex === undefined) {
      // Handle the case where ruleKey is not valid
      return 0;
  }

  const filteredItems = items.filter(item => item[ruleIndex] === ruleValue);
  return filteredItems.length;
}
// function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
//   let ans = 0;
// for (const item of items) {
//   const [type, color, name] = item;
// if(ruleKey === 'type'){
//   type === ruleValue ? ans++: ''
// }
// else if(ruleKey === 'color'){
//   color === ruleValue ? ans++: ''
// }
// else if(ruleKey === 'name'){
//   name === ruleValue ? ans++: ''
// }
// }
//   return ans;
// };
// solution 2
// function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
//   let ans = 0;

//   const map: Record<string,number> = {
//     'type': 0,
//     'color': 1,
//     'name': 2,
//   }

//   for(let item of items){
//     if(item[map[ruleKey]] === ruleValue) ans++;
//   }
//   return ans;
// solution 3 
  //   let ans = 0;
// items.forEach((item) => {
//     item.forEach((itm,idx)=>{
//         if(ruleKey === 'type'){
//             if(itm === ruleValue && idx === 0){ans++;}
//         }
//        else if(ruleKey === 'color'){
//             if(itm === ruleValue && idx === 1){ans++;}
//         }
//        else if(ruleKey === 'name'){
//             if(itm === ruleValue && idx === 2){ans++;}
//         }

//     })
// })
//     return ans;
// };

console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],'type', 'phone'));
