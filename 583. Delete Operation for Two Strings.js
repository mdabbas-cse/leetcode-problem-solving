// const word1 = "sea", word2 = "eat"
const word1 = "leetcode", word2 = "etco"

const w1arr = word1.split('')
const w2arr = word2.split('')

const existChar = w1arr.filter(x => w2arr.includes(x)).join('')

console.log(existChar)
const str = "Learning"

// substring between index 0 and index 5
// console.log(str.substring(0, 5))
// substring between index 2 and index 5
// console.log(str.substring(2, 5))