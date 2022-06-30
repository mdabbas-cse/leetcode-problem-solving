// const matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// const matrix = [[1, 4], [2, 5], [3, 6]]
// outPut = [[1, 2, 3], [4, 5, 6]]
const matrix = [[1, 2, 3], [4, 5, 6]]
// output = [[1, 4], [2, 5], [3, 6]]

const arr = []

const matrixLen = matrix.length
const rowLen = matrix[0].length

console.log(matrixLen, rowLen)

for(let i = 0; i <rowLen; i += 1) {
  const tempArr = []
  for( let j =0; j < matrixLen; j += 1) {
    tempArr.push(matrix[j][i])
  }
  arr.push(tempArr)
}


console.log(arr)