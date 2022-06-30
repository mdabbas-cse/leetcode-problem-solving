const values = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000
}

const romanToInt = (str) => {

  const strTolower = str.toLowerCase();
  let result = 0;
  const strArr = strTolower.split('');
  const objKey = Object.keys(values);
  console.log(objKey)

  for (let i = 0; i < strArr.length; i++) {
    result += values[strArr[i]] < values[strArr[i + 1]] ? -values[strArr[i]] : values[strArr[i]]
  }
  console.log(result)
  return result;

}

romanToInt('MCMLXXXIX')