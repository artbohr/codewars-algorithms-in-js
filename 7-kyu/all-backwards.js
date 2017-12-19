/*
Input: ['This', 'Is', 'a' 'Example');

Output: 'examplE a iS thiS'

Reverse the input, with only the LAST letter of each item capitalized.
If the item is a single letter word and not capitilized, do not capitalize it.
*/

function flipper(stringArr){
  return stringArr.reverse().reduce((acc, el) => {
    el.length == 1 ? acc.push(el) :
    acc.push(el.substr(0,el.length-1).toLowerCase() + el[el.length-1].toUpperCase());

    return acc
  },[]).join(" ");
}

flipper(['injd15hjo87jbztcsor','4O7LKB9Y9VNE9HK6GVI','0v4kybe3oi2dqoj38fr','a','puwakfx9q9dwsqfiggb9']);
//Returns: 'puwakfx9q9dwsqfiggb9 a 0v4kybe3oi2dqoj38fR 4o7lkb9y9vne9hk6gvI injd15hjo87jbztcsoR'
