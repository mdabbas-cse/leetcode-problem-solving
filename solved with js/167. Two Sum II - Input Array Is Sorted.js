// const numbers = [2, 7, 11, 15], target = 9
const numbers = [2, 3, 4], target = 6
const numLen = numbers.length

const sortNumber = numbers.sort((a, b) => a - b)
const arr = []

let left = 0
let right = numLen - 1
while (left < right) {
  const cur = numbers[left] + numbers[right]
  if (cur == target) return [left + 1, right + 1]
  cur > target ? right-- : left++
}


// console.log(sortNumber)
console.log(arr)