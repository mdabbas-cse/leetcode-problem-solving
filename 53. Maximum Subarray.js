const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6

// const nums = [5, 4, -1, 7, 8]
// Output: 23
// const nums = [1]
// Output: 1

let sum = 0
let max = nums[0]
const len = nums.length
for (let i = 0; i < len; i += 1) {
  if (sum < 0) sum = nums[i]
  else sum += nums[i]
  console.log('sum', sum)

  if (sum > max) max = sum
  console.log('max', max)
}
console.log(max)