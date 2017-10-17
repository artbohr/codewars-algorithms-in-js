/*
It involves implementing a program that sums the digits of a non-negative integer.
For example, the sum of 3433 digits is 13.

Digits can be a number or a string, and you should control it is no undefined
and return an empty string.

To give you a little more excitement, the program will not only write the result of the sum,
but also write all the sums used: 3 + 4 + 3 + 3 = 13.
*/

function sum(digits) {
  if (digits === undefined) return '';

  digits = digits.toString();

  const add = digits.split('').reduce((acc,item)=>{
    return acc + parseInt(item);
  }, 0);

  const strRep = digits.split('').reduce((acc,item)=>{
    return acc + ` + ${item}`;
  }, '');

  return `${strRep.slice(3)} = ${add}`;
}

sum("64323");
// Returns: '6 + 4 + 3 + 2 + 3 = 18'
