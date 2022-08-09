// Example 1:
// const nums = [-1, 0, 3, 5, 9, 12]
// const target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
const nums = [-1, 0, 3, 5, 9, 12]
const target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

console.log(search(nums, target))