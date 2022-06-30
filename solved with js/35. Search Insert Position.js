// const nums = [1, 3, 5, 6],target = 5
// Output: 2
// const nums = [1, 3, 5, 6], target = 2
// Output: 1
// const nums = [1, 3, 5, 6], target = 7
// Output: 4
const nums = [3, 5, 7, 9, 10], target = 8
// Output: 3

searchInsert = function (nums, target) {
  if (nums.indexOf(target) > 0) {
    return nums.indexOf(target)
  }
  nums.push(target)
  nums.sort((a, b) => a - b)
  return nums.indexOf(target)
}

console.log(searchInsert(nums, target))