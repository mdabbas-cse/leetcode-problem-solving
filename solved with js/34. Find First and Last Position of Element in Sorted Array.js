// const nums = [5, 7, 7, 8, 8, 10]
// const target = 8
// Output: [3, 4]

// const nums = [5, 7, 7, 8, 8, 10]
// const target = 6
// Output: [-1, -1]

// const nums = []
// const target = 0
// Output: [-1,-1]

const nums = [3, 3, 3]
const target = 3
// Output: [0,2]
var searchRange = function (nums, target) {
  const left = BinarySearch(nums, target, true)
  const right = BinarySearch(nums, target, false)
  return [left, right]
}

const BinarySearch = (nums, target, leftBias) => {
  let left = 0
  let right = nums.length - 1
  let i = -1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2) // 5 
    if (target < nums[mid]) {
      right = mid - 1
    } else if (target > nums[mid]) {
      left = mid + 1
    } else {
      i = mid
      if (leftBias) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return i

}
console.log(searchRange(nums, target))
