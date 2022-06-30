// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const nums = [1, 1, 2]

var removeDuplicates = function (nums) {
  const newArr = []
  const numLen = nums.length
  for (let i = 0; i < numLen; i += 1) {

    // if (newArr.includes(nums[i])) {
    //   newStr.push('_')
    // } else {
    //   newArr.push(nums[i])
    // }
    if (!newArr.includes(nums[i])) {
      newArr.push(nums[i])
    }
  }
  return [...newArr]
}

console.log(removeDuplicates(nums))