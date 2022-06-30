// const nums = [4, 2, 4, 5, 6]
// const nums = [5,2,1,2,5,2,1,2,5]
const nums = [187, 470, 25, 436, 538, 809, 441, 167, 477, 110, 275, 133, 666, 345, 411, 459, 490, 266, 987, 965, 429, 166, 809, 340, 467, 318, 125, 165, 809, 610, 31, 585, 970, 306, 42, 189, 169, 743, 78, 810, 70, 382, 367, 490, 787, 670, 476, 278, 775, 673, 299, 19, 893, 817, 971, 458, 409, 886, 434]
// const len = nums.length
// const arr = []
// sum = 0
// for (let i = 0; i < len; i += 1) {
//  if(arr.indexOf(nums[i]) === -1) {
//    arr.push(nums[i])
//  }
// }
// let arlen = arr.length
// for(let j=0; j < arlen; j += 1)
// sum += arr[j]
// console.log(sum)

var maximumUniqueSubarray = function (nums) {
  let nmap = new Int8Array(10001), total = 0, best = 0
  const len =  nums.length
  for (let left = 0, right = 0; right < len; right++) {
    nmap[nums[right]]++, total += nums[right]
    while (nmap[nums[right]] > 1)
      nmap[nums[left]]--, total -= nums[left++]
    best = Math.max(best, total)
  }
  return best
}

console.log(maximumUniqueSubarray(nums));