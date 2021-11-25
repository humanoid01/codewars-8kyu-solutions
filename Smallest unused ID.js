/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/
function nextId(ids) {
  ids.sort((a, b) => a - b)

  let id
  if (ids.includes(0) === false) {
    return (id = 0)
  }
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] - ids[i - 1] > 1) {
      return (id = ids[i - 1] + 1)
    }
  }
  if (id === undefined) {
    return (id = ids[ids.length - 1] + 1)
  }
  return id
}
//------------------------------------------------//
function nextId(ids) {
  let id = 0
  while (ids.includes(id)) {
    id++
  }
  return id
}
