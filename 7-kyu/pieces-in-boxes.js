function chickenOptions(n) {
  if (n<4 || !Number.isInteger(n)) return [0]
  solutions = []

  for (i = 0; i < n+1; i++) {
    if (i===3) solutions.push(i)
    if (i===6) solutions.push(i)
    if (i===10) solutions.push(i)

    for (j = 0; j < solutions.length; j++) {
      if (solutions.includes(i-solutions[j]) && !solutions.includes(i)){
        solutions.push(i)
      }
    }
  }
    return [0].concat(solutions)
}

/*
Harry's local chicken shop - The Golden Chick - sells chicken pieces in boxes of 3, 6 and 10.

Write a function that takes the total number of chicken pieces Harry can eat (n) and returns
an array of the possible numbers of chicken pieces he can buy, that are less than or equal to n.

0 chicken pieces is a valid chicken option.

For example:

chickenOptions(9)

should return [0,3,6,9], as Harry can buy no boxes,
a box of 3, a box of 6, or a box of 3 and a box of 6 (9 in total).

For non-numeric input, the function should return [0]
*/
