// const str1 = "1010"
// const str2 = "1011"
const str1 = "10"
const str2 = "1011"
const addBinary = (a, b) => {
  let carry = 0
  const l_1 = a.length - 1
  const l_2 = b.length - 1
  const result = []
  for (let i = l_1, j = l_2; 0 <= i || 0 <= j; --i, --j) {
    let num_1 = 0 <= i ? Number(a[i]) : 0,
      num_2 = 0 <= j ? Number(b[j]) : 0
    result.push((num_1 + num_2 + carry) % 2)
    carry = 1 < num_1 + num_2 + carry
  }
  if (carry) result.push(1)
  console.log(result)
  return result.reverse().join("")
}
console.log(addBinary(str1, str2))