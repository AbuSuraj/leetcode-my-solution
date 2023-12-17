function maxWidthOfVerticalArea(points: number[][]): number {
//     const xPoints: number [] = []
//     points.forEach(point =>{
//      xPoints.push(point[0])
//     // uniquePoints.add(point[0]);
// }) 
// xPoints.sort((a,b)=>a-b)
// console.log(xPoints);
// let max = -Infinity;
// for(let i=0; i<xPoints.length-1; i++){
//   max = Math.max(max,xPoints[i+1]-xPoints[i]);
// }
// return max

// solution 2 
points.sort((a,b) => a[0]-b[0]);
let max = 0;
for(let i =0; i<points.length-1; i++){
    max = Math.max(max,points[i+1][0]-points[i][0]);
}
return max
};

console.log(maxWidthOfVerticalArea( [[8,7],[9,9],[7,4],[9,7]]));
