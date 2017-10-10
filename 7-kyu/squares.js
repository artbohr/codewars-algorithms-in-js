/*
Task:
Given an integral number, determine if it's a square number:
*/

function isSquare(n){
  return Math.sqrt(n) % 1 === 0;    
}

isSquare(81);
// Returns: true
