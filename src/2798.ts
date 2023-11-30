// 2798. Number of Employees Who Met the Target
function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {

let count = 0;
//  solution 1 

// hours.forEach(hour => {
//     hour >=target ? count++: ''
// })
// return count;

// solution 2 
// more efficient solution
return hours.filter(hour => hour >=target).length;
};

console.log(numberOfEmployeesWhoMetTarget([5,1,4,2,2], 6))