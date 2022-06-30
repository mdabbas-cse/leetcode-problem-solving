const nums = [-1, 2, 1, -4]
const target = 1
// Output: 2

const threeSumClosest = function (nums, target) {
  let sum = 0
  for (let i = 0; i < 3; i++) {
    sum += nums[i]
  }
  return sum
}

console.log(threeSumClosest(nums, target))