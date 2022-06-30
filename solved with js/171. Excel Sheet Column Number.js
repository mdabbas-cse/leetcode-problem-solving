// Input: columnTitle = "A"
// Output: 1
// Input: columnTitle = "AB"
// Output: 28
// Input: columnTitle = "ZY"
// Output: 701


function titleToNumber(columnTitle) {
  const len = columnTitle.length
  let res = 0
  let temp = 1
  for (let i = 0; i < len; i++) {
    res += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, len - i - 1)
    // res = res + getnumber(columnTitle[i])
  }
  return res
}


function getnumber(char) {
  return char.charCodeAt(0) - 'A'.charCodeAt(0) + 1
}

console.log(titleToNumber('ZY')) // 👉️ 701
console.log(titleToNumber('B')) // 👉️ 2
console.log(titleToNumber('AB')) // 👉️ 28
console.log(titleToNumber("FXSHRXW")) 