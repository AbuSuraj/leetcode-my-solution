function isPathCrossing(path: string): boolean {
    let ns=0,ew=0;
//     const len = path.length;
//   if(len ===1) {return false} 
const visited = new Set<string>();
visited.add('0,0')
for(let p of path){
    // console.log(p);
    if(p === 'N'){ns++;}
    else if(p === 'S'){ns--}
    if(p === 'E'){ew++;}
    else if(p === 'W'){ew--;}
//  console.log(ns, ew);
 const currentPosition = `${ns},${ew}`;
 if(visited.has(currentPosition)){return true}
  visited.add(currentPosition);
// if(len === Math.abs(ns) || len === Math.abs(ew)) {return false
// }
}
return false;
};
console.log(isPathCrossing('NESWW'));
