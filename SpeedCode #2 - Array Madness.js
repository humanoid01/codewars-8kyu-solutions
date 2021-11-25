/*
SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!
*/

function arrayMadness(a, b) {
  let sum = 0
  let sum1 = 0
  const array1 = a.map((x) => x ** 2)
  const array2 = b.map((x) => x ** 3)
  for (let i = 0; i < a.length; i++) {
    sum += array1[i]
  }
  for (let i = 0; i < b.length; i++) {
    sum1 += array2[i]
  }
  return sum > sum1
}
//-------------------------//
function arrayMadness(a, b) {
  return (
    a.reduce((acc, current) => acc + current ** 2, 0) >
    b.reduce((acc, current) => acc + current ** 3, 0)
  )
}
