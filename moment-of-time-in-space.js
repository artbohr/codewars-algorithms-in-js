/*
Task

You are given a moment in time and space. What you must do is break it down into time and space, to determine if that moment is from the past, present or future.

Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].

Space in the number of characters which do not increase time (i.e. all characters but those that increase time).

The moment of time is determined as follows:

If time is greater than space, than the moment is from the future.
If time is less than space, then the moment is from the past.
Otherwise, it is the preset moment.

You should return an array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.
Examples

For moment = "01:00 pm", the output should be [true, false, false].

time equals 1, and space equals 7, so the moment is from the past.

For moment = "12:02 pm", the output should be [false, true, false].

time equals 5, and space equals 5, which means that it's a present moment.

For moment = "12:30 pm", the output should be [false, false, true].

time equals 6, space equals 5, so the moment is from the future.

Input/Output

    [input] string moment

    The moment of time and space that the input time came from.

    [output] a boolean array

    Array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.

*/

function momentOfTimeInSpace(moment) { 
  const a = moment.split("");
  let time = 0;
  let space = 0;
  
  for(let x=0; x<a.length; x++){
    if(!Number.isNaN(parseInt(a[x])) && parseInt(a[x]) !== 0){
      time+=parseInt(a[x]);
      
    } else { space++ }

  }
    if (time>space) { return [false, false, true]; }
    else if (time<space) { return [true, false, false]; }
    else { return [false, true, false]; }
  
}

/* past, present and future
I need to separate input in to an array
in the array I need to separare everything that is not a num between(1-9)
count the nums
count the space (everything other than 1-9) just add +1 to space
compare and return desired output
*/
