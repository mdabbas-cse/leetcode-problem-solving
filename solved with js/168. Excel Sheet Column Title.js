// Input: columnNumber = 1
// Output: "A"
// Input: columnNumber = 28
// Output: "AB"
// Input: columnNumber = 701
// Output: "ZY"

var convertToTitle = function (columnNumber) {
  let res = ''
  while (columnNumber > 0) {
    const index = (columnNumber - 1) % 26
    res = intToChar(index) + res
    columnNumber = Math.floor((columnNumber - 1) / 26)
  }
  return res
}

function intToChar(int) {
  const code = 'A'.charCodeAt(0)
  return String.fromCharCode(code + int)
}

// console.log(intToChar(0)) // 👉️ "A"
// console.log(intToChar(4)) // 👉️ "E"

console.log(convertToTitle(701)) // 👉️ "A"