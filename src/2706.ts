function buyChoco(prices: number[], money: number): number {
// prices.sort((a,b)=> a-b);
    
//     return money - (prices[0]+prices[1]) >=0 ? money - (prices[0]+prices[1]): money
let min1 = Number.MAX_SAFE_INTEGER;
let min0 = Number.MAX_SAFE_INTEGER;
let remaining = 0;
for(let price of prices){
 if(price<min0){
    min1 = min0;
    min0 = price;
    console.log(min0, min1);
    
 }
 else{min1 = Math.min(min1,price);

console.log(min0, min1, price);
}
}
// console.log(min0,min1);

 remaining = money - min0-min1
 return (remaining>=0 ? remaining: money)
};

console.log(buyChoco([3,2,2,4,1, 6, 1], 3));
