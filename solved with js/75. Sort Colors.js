const nums = [2, 0, 2, 1, 1, 0]
// Output: [0, 0, 1, 1, 2, 2]


// const nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function (nums) {
  let n = nums.length
  console.log(nums[n - 1])
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }
  return nums
}
console.log(sortColors(nums))