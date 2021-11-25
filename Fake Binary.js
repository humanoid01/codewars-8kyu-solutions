/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/
function fakeBin(x) {
  const arr = x
    .split('')
    .map((x) => (x >= 5 ? '1' : '0'))
    .join('')
  return arr
}
