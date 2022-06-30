const nums1 = [1, 3], nums2 = [2]

const findMedianSortedArrays = (nums1, nums2) => {
  const newArr = nums1.concat(nums2).sort((a, b) => a - b)
  const len = newArr.length
  const midIndx = Math.floor((len - 1) / 2)
  if (len % 2 === 0) return ((newArr[midIndx] + newArr[midIndx + 1]) / 2).toFixed(5)
  return (newArr[midIndx]).toFixed(5)
}
console.log(findMedianSortedArrays(nums1, nums2))