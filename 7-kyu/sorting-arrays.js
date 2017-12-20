/*
Given two arrays, a1 and a2, sort the elements of a2 based
on the first letters of elements in a1.

Example 1:

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
*/

function sortArray(a1, a2) {
  var arr = [];

  for (let i=0; i<a1.length; i++){
    for (let k=0; k<a2.length; k++){
      if (a2[k][0] == a1[i][0]){
        arr.push(a2[k]);
        break;
      }
    }
  }
  return arr;
}

var arr1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var arr2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

sortArray(arr1, arr2);
//returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
