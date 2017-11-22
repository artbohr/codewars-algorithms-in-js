/*
Define a function factorial that takes a parameter n and returns its factorial
(e.g. factorial(5) === 120; factorial(3) === 6).
This function must be recursively defined (there will be tests for this).

Using your factorial function, define a function P(n, r) that returns the number
of permutations of n objects taken r at a time, e.g. P(5, 2) === 20. Again,
whether you have used the factorial function in defining this function will be tested.
Using both the factorial and P functions, define a function C(n, r) that returns
the number of combinations of n objects taken r at a time, e.g. C(6, 3) === 20.
Once again, this will be tested.

Apart from the instructions above, there is also a very strict
character limit for each function, so be concise!
 */

function factorial(n) {
  return n < 2 ? 1 : factorial(n - 1) * n;
}

function P(n, r) {
  return factorial(n) / factorial(n - r);
}

function C(n, r) {
  return P(n, r) / factorial(r);
}

factorial(5);
//Returns: 120
P(5, 3);
//Returns: 60
C(5, 2);
//Returns: 10
