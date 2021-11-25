/*
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it
*/

function arr2bin(arr) {
  let sum = 0
  arr.forEach((i) => {
    if (typeof i === 'number') {
      sum += i
    }
  })
  return sum.toString(2)
}
//-----------------------------------//
function arr2bin(arr) {
  return arr
    .reduce((sum, cur) => (typeof cur == 'number' ? sum + cur : sum), 0)
    .toString(2)
}

//-------------------------//
function arr2bin(arr) {
  return arr
    .reduce((sum, cur) => {
      if (typeof cur == 'number') {
        return (sum = sum + cur)
      } else {
        return sum
      }
    }, 0)
    .toString(2)
}
