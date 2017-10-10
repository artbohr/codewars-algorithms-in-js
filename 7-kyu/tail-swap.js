/*
You'll be given a list of two strings, and each will contain exactly one colon in the middle (but not at beginning or end).
The length of the strings, before and after the colon, are random.
Your job is to return a list of two strings (in the same order as the original list),
but with the characters after each colon swapped.
*/

function tailSwap(arr) {
  return [(`${arr[0].split(":")[0]}:${arr[1].split(":")[1]}`), (`${arr[1].split(":")[0]}:${arr[0].split(":")[1]}`)];
}

tailSwap(['abc:123', 'cde:456']);
// Returns: ['abc:456', 'cde:123']
