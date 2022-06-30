const num = -3421

function reverseInt(int) {
  let isNegative = false
  if (int < 0) isNegative = true
  const dis = num.toString().match(/\d/gi).reverse().join('')
  if (dis >= Math.pow(2, 31) - 1 || dis <= Math.pow(-2, 31)) {
    return 0
  }
  return isNegative ? -dis : dis
}
console.log(reverseInt(num))