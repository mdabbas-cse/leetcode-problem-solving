function longestUniqueSubsttr(str) {
  const n = str.length
  let res = 0
  for (let i = 0; i < n; i++) {
    const arr = [256]
    for (let j = i; j < n; j++) {
      if (arr[str.charCodeAt(j)] === true) break
      else {
        res = Math.max(res, j - i + 1)
        arr[str.charCodeAt(j)] = true
        console.log(arr)
      }
    }
  }
  return res
}

// Driver code
var str = "abcabcbb"
// var str = "geeksforgeeks"
console.log("The input string is " + str)

var len = longestUniqueSubsttr(str)
console.log(len)
