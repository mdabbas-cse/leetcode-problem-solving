// const x = 27
// output: 3

const x = 8
// output: 2

const sqrt = (x) => {
  let left = 1
  let right = x
  let ans = 0

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (mid * mid <= x) {
      ans = mid
      left = mid + 1
    } else
      right = mid - 1
  }

  return ans
}
console.log(sqrt(x))