const nums = [4, 5, 6, 7, 0, 1, 2]
const target = 0
// Output: 4

// const nums = [4, 5, 6, 7, 0, 1, 2]
// const target = 3
// Output: -1

// const nums = [1]
// const target = 0
// Output: -1

const binarySearch = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (target === nums[mid]) return mid
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid])
        right = mid - 1
      else
        left = mid + 1
    } else if (nums[mid] <= nums[right]) {
      if (nums[mid] <= target && target <= nums[right])
        left = mid + 1
      else
        right = mid - 1
    }
  }

  return -1

}

console.log(binarySearch(nums, target))