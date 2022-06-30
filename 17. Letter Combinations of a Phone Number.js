// const d = "23"
// const d = "2"
// const d = ""
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

const d = "269"
// const a = ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"]
var letterCombinations = function (digits) {
  // Resultant list
  let combinations = []
  // Base condition
  if (digits === null || digits.length === 0) {
    return combinations
  }
  // Mappings of letters and numbers
  const lettersAndNumbersMappings = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  findCombinations(combinations, digits, "", 0, lettersAndNumbersMappings)
  return combinations
}

function findCombinations(combinations, digits, previous, index, lettersAndNumbersMappings) {
  // Base condition for recursion to stop
  if (index === digits.length) {
    combinations.push(previous)
    // console.log(previous)
    return
  }
  // Get the letters corresponding to the current index of digits string
  let letters = lettersAndNumbersMappings[digits[index] - '0']
  // console.log(letters, digits[index] - '0')
  // Loop through all the characters in the current combination of letters
  for (let i = 0; i < letters.length; i++) {
    findCombinations(combinations, digits, previous + letters[i], index + 1, lettersAndNumbersMappings)
  }
};
console.log(letterCombinations(d))

