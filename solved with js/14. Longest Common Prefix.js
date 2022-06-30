const strs = ["flower", "flow", "flight"]
// const strs = ["dog", "racecar", "car"]

const longestCommonPrefix = function (strs) {
  const strsLen = strs.length
  if (strsLen === 0) return ''
  strs.sort()
  const start = strs[0], end = strs[strsLen - 1]
  const startLen = start.length
  let ans = ''

  for (let i = 0; i < startLen; i += 1) {
    if (start[i] === end[i]) ans += start[i]
    else break
  }
  return ans
}
console.log(longestCommonPrefix(strs))