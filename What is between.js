/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

function between(a, b) {
  let iterator = 0
  return Array.from(
    {
      length:
        a && b < 0
          ? Math.abs(a) - Math.abs(b) + 1
          : a < 0
          ? Math.abs(a) + Math.abs(b) + 1
          : b - a + 1,
    },
    () =>
      a && b < 0 ? a + iterator++ : a < 0 ? a + iterator++ : a + iterator++
  )
}
//----------------------------------//
function between(a, b) {
  let array = []
  for (let i = a; i <= b; i++) {
    array.push(i)
  }
  return array
}
