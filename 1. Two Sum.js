// const nums = [2, 7, 11, 15], target = 9
const nums = [3, 2, 3], target = 6
// const nums = [2, 7, 11, 15], target = 9
// const nums = [3,3], target = 6
const len = nums.length
const arr = []

const indexOf = (el) => nums.indexOf(nums[el])

for (let i = 0; i < len; i += 1) {
  const indx = i + 1
  for (let j = indx; j < len; j += 1) {
    const num = nums[i] + nums[j]

    if (num === target) {
      const indx1 = nums.indexOf(nums[i])
      const indx2 = nums.lastIndexOf(nums[j])
      arr.push(indx1, indx2)
      break
    }
  }
}
console.log(arr)