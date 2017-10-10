/*
You have a sequence of positive numbers starting with 1, but one number is missing!

Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.

In short: an invalid sequence (a string with non numeric character) must return 1, an already complete (or empty) sequence must return 0; a broken sequence with more than one number missing should return the lowest missing number; otherwise return the missing number.

Note that the input may be with random order.

E.g.

findMissingNumber("1 3 2 5") // returns 4, because 4 is missing
*/

function findMissingNumber(sequence){
  if (sequence==="") { return 0;}
  
  const sequenceArray = sequence.split(" ").map((x)=> {
    return parseInt(x, 10);
  });
  
  sequenceArray.sort((a, b)=>{return a - b});
  
  if (sequenceArray.includes(NaN)) { return 1;}
  
  for (let x=0;x<sequenceArray.length;x++){
    if(sequenceArray[0] !== 1){
      return 1;
    }else if (x==sequenceArray.length-1){
      return 0;
    }else if (sequenceArray[x]+1 !== sequenceArray[x+1] ){
      return sequenceArray[x]+1;
    }  
  }
} 

console.log(findMissingNumber("2 1 4 3 a"));
//Outputs: 1
