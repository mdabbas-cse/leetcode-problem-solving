const dis = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// const dis = [9]

var plusOne = function (digits) {
  const len = digits.length - 1
  for (let i = len; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits.unshift(1)
  return digits
}

console.log(plusOne(dis))