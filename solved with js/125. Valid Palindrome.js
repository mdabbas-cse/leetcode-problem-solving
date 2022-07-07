// const s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// ------------------------
// const s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// const s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
const s = "0p"

const isPalindrome = (s) => {
  const len = s.length
  let revlen = len - 1
  const arr = []
  const reverseArr = []

  for (let i = 0; i < len; i += 1) {
    if ((s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) || (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) || parseInt(s[i], 10) <= 9) {
      arr.push(s[i].toLowerCase())
    }
    if ((s.charCodeAt(revlen) >= 65 && s.charCodeAt(revlen) <= 90) || (s.charCodeAt(revlen) >= 97 && s.charCodeAt(revlen) <= 122) || parseInt(s[revlen], 10) <= 9) {
      reverseArr.push(s[revlen].toLowerCase())
    }

    revlen--

    console.log(arr, reverseArr)
    if (arr.join('') === reverseArr.join('')) {
      return true
    }
    return false
  }

  // const result = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  // const reverseResult = result.split('').reverse().join('')
  // console.log(result === reverseResult)
  console.log(isPalindrome(s))
