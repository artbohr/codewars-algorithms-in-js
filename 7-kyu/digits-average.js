/*
Given an integer, take the (mean) average of each pair of consecutive digits.
Keep doing this process until you have a single integer, then return that integer. e.g.

digitsAverage(246)
average of 2 and 4 is 3, average of 4 and 6 is 5
so after first iteration 246 => 35
average of 3 and 5 is 4
so digitsAverage(246) returns 4

If the average of two digits is not a whole number, round the result up. e.g.

digitsAverage(89)
average of 8 and 9 is 8.5 ==> return 9
 */

function digitsAverage(input) {
  if (input < 10) return input;

  input = input.toString().split("").map(Number);
  let pointer = input.length-1;

  while(input.length>2){
    if(pointer==0) {
      input.shift();
      pointer = input.length-1;

    }else{
      input.push(Math.ceil((input[0]+input[1])*0.5));
      input.shift();
      pointer--;
    }
  }
  return Math.ceil((input[0]+input[1])*0.5);
}

digitsAverage(73318)
//Returns: 4
