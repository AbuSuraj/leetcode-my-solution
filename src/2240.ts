function waysToBuyPensPencils(total: number, cost1: number, cost2: number): number {
   let count = 0;
   const x= total/cost1;
   for(let i =0; i<=x; i++){
    count += Math.round((total - i * cost1) / cost2 + 1);
   }
   return count;
  }
const total = 100;
const cost1 = 1;
const cost2 = 1;

const distinctWays = waysToBuyPensPencils(total, cost1, cost2);
console.log(distinctWays);