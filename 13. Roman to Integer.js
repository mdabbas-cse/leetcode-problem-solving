const myMap = new Map()
myMap.set('I', 1)
myMap.set('V', 5)
myMap.set('X', 10)
myMap.set('L', 50)
myMap.set('C', 100)
myMap.set('D', 500)
myMap.set('M', 1000)

let romanToInt = function (s) {
  let result = 0
  if (s) {
    let s1 = s.split('')
    console.log(s1)
    s1.forEach(function (e, i) {
      //  console.log(e, s1[i + 1]);
      // console.log(-myMap.get(e))
      result += myMap.get(e) < myMap.get(s1[i + 1]) ? -myMap.get(e) : myMap.get(e)  // used ternary oprator with '-' where required
      // console.log(e, result)
    })
  }
  return result //move it outside loop
}
// console.log(romanToInt('IV'));
// console.log(romanToInt('V'));
// console.log(romanToInt('VII'));
// console.log(romanToInt('MCMLXXXIX'))
console.log(romanToInt('MCMXCIV'))