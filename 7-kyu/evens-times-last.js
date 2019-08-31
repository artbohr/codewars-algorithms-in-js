function evenLast(numbers) {
    if (numbers.length==0) return 0;
    let total = 0;
    
    for(x=0; x<numbers.length; x++){
      if(x%2==0) total+=numbers[x]*numbers[numbers.length-1];
    }
    
    return total;
  }

/*
Given an array of integers, return the sum of all the integers that have
 an even index, multiplied by the integer at the last index.

If the array is empty, you should return 0.

*/