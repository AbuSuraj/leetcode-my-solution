function minMovesToSeat(seats: number[], students: number[]): number {
  let sum = 0;
  seats.sort((a,b)=> a-b);
  students.sort((a,b)=> a-b);
  for(let i=0; i<students.length; i++){
    // console.log(seats[i],students[i]);
    
    sum += (Math.abs(seats[i]-students[i]))
  }
  return sum;  
};
console.log(minMovesToSeat([2,2,6,6], [1,3,2,6]));
