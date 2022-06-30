// const trangles = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
// const trangles = [[-10]]
const trangles = [[-1], [2, 3], [1, -1, -3]]
const tranglesLen = trangles.length
let sum = 0
console.log(tranglesLen - 2)
for (let i = tranglesLen - 2; i >= 0; i -= 1) {
  console.log(trangles[i])
}
// console.log(sum)