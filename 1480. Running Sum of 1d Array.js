const nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

const len = nums.length
const result = []

let sum = 0
for(let i =0; i < len; i+=1) {
  sum += nums[i]
  result.push(sum)
}

console.log(result)