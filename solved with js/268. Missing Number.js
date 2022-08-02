// const nums = [3, 0, 1]
// Output: 2
// const nums = [0, 1]
// Output: 2
const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
// Output: 8

var missingNumber = function (nums) {
  let n = nums.length
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
  }
  return n * (n + 1) / 2 - sum
}

console.log(missingNumber(nums))