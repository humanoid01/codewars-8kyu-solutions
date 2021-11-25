/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let sum = 0
  if (sonYearsOld * 2 > dadYearsOld) {
    return sonYearsOld * 2 - dadYearsOld
  }

  while (sonYearsOld * 2 < dadYearsOld) {
    sonYearsOld++
    dadYearsOld++
    sum++
  }
  return sum++
}
