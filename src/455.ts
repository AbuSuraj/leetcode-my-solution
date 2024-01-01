function findContentChildren(g: number[], s: number[]): number {
 let count =0, i=0, j=0;
g.sort((a,b)=>a-b);
s.sort((a,b)=>a-b);

while(i<g.length && j<s.length) {
    if(s[j]>=g[i]){
        count++;
        i++;
        j++;
    }
    else{
        j++;
    }
 }
    
    return count
};

console.log(findContentChildren([1,2], [1,2,3]));
