// const s = "anagram"
// const t = "nagaram"

const s = "rat"
const t = "car"

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const s_spl = s.split('').sort().join('')
  const t_spl = t.split('').sort().join('')
  return s_spl === t_spl
}
console.log(isAnagram(s, t))