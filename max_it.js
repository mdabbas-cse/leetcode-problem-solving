inp = 3
mod = 1000
l = [[2, 5, 4], [3, 7, 8, 9], [5, 5, 7, 8, 9, 10]]
sum = 0
// 1,3,5
let sumIndx = 1

for (let i = 0; i < l.length; i++) {
  sum += l[i][sumIndx] * l[i][sumIndx]
  sumIndx += 2
}

const res = sum % mod

console.log(res)