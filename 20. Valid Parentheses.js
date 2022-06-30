const s = "()"

var isValid = function (s) {
  const leftSymbel = []
  const sLen = s.length
  for (let i = 0; i < sLen; i += 1) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      leftSymbel.push(s[i])
    } else if (s[i] === ')' && leftSymbel.length !== 0 && leftSymbel[leftSymbel.length - 1] === '(') {
      leftSymbel.pop()

    } else if (s[i] === '}' && leftSymbel.length !== 0 && leftSymbel[leftSymbel.length - 1] === '{') {
      leftSymbel.pop()

    } else if (s[i] === ']' && leftSymbel.length !== 0 && leftSymbel[leftSymbel.length - 1] === '[') {
      leftSymbel.pop()
    }
    else {
      return false
    }
  }
  return leftSymbel.length === 0
}

console.log(isValid(s))


