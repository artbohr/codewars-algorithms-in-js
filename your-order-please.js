/*
Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/

function order(words){
  // if string is empty, returns empty string
  if (words == "") {return ""};
  // split the string in to an array of words
  var a = words.split(" ");
  // sets an array of undefined values based on length of the words array
  var b = Array.apply(null, Array(a.length)).map(function () {return 0})
  
  // finds the number and replaces the undefined placeholder with a 'word' based on num (index)
  for(x=0; x<a.length; x++){
    for(i=0; i<a[x].length; i++){
      if(!Number.isNaN(parseInt(a[x][i]))){
       b.splice(a[x][i]-1, 1, a[x]);
      } 
    }
  } return b.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
// Outputs: Thi1s is2 3a T4est
