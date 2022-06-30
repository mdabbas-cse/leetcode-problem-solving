
const x =  [1,2,2,1]

const remvNumber = x.toString().split('').reverse().join('')


if(x === parseInt(remvNumber)){
    console.log('true')
} else {
    console.log('false')
}