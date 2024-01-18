const signNumberSeparation =(arr: number []): number []=>{
    let left =0, right = arr.length;
    while(left<=right){
        if(arr[left]<0 && arr[right]<0){
            left++;
        }
        else if(arr[left]>0 && arr[right]<0){
          const temp =  arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++; right--;
        }
        else if(arr[left]>0 && arr[right]>0){right--;}
        else {left++; right--}
    }
return arr;
}
console.log(signNumberSeparation([-2,1,-10,33,4,-2,6]));
