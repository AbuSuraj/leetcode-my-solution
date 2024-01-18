function intersection(arr1: number[], arr2: number[]):number[]{
   const intersected: number [] = [];
   const len1 = arr1.length;
   const len2 = arr2.length;
   let i =0, j = 0;
   arr1.sort((a,b) =>a-b);
   arr2.sort((a,b) =>a-b);
   while(i < len1 && j< len2){
      if(arr1[i] < arr2[j]){i++;}
      else if(arr1[i]>arr2[j]){j++}
      else{
        intersected.push(arr1[i]); i++; j++;
      }
   }
    return [intersected.length];
}
const array1 = [
    34, 45, 73, 38, 39, 62, 64, 69, 56, 51, 59, 63, 52, 71, 68, 70, 58, 41, 37, 48,
    40, 72, 44, 60, 47, 46, 54, 43, 35, 49, 55, 67, 65, 75, 74, 36, 61, 66, 57, 53,
    42, 50
  ];
  
  const array2 = [
    52, 62, 103, 44, 70, 67, 92, 77, 56, 69, 101, 57, 105, 49, 66, 60, 40, 58, 104,
    80, 75, 95, 71, 89, 86, 73, 84, 97, 88, 90, 93, 48, 63, 74, 79, 45, 41, 98, 81,
    87, 76, 55, 85, 43, 64, 96, 72, 59, 83, 107, 46, 61, 50, 54, 102, 82, 78, 68,
    51, 53, 42, 91, 47, 106, 99, 100, 65, 94
  ];
  
console.log(intersection(array1,array2));
