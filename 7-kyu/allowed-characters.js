/*
Define createSequence(regex) function that returns a string of all alphanumerical characters (in ASCII order) matching specified regular expression one-character criterion.


let digits = /[0-9]/;
// createSequence(digits) === '0123456789'

let hexadecimal = /[0-9A-F]/;
// createSequence(hexadecimal) === '0123456789ABCDEF'
*/

const createSequence = (regex) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const regexConv = regex.toString().slice(-1) == 'i'? new RegExp(regex,'gi') : new RegExp(regex,'g');

  return chars.match(regexConv).join("");
}

