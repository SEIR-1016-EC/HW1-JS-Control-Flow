console.log('js-loaded')

// const secretNum = 1111
// let guessNum = 10000
// let color = 'sheesh'


// if (color === 'green') {
//   console.log('GOOOOOO')
// } else if (color === 'yellow') {
//   console.log('SLOwww')
// } else if (color === 'red'){
//   console.log('STOP N Droppp')
// } else {
//   console.log('Whatever')
// }
 

// console.log(div.classList.contains("incredible"))

// console.log(div.outerHTML)
const max_num = 100
const secretNum = Math.floor(Math.random() *   max_num) + 1
console.log(secretNum)

let guessNum
while (guessNum !== secretNum) {
    guessNum = prompt('Enter your guess:  ')
    guessNum = parseInt(guessNum)
if (guessNum < secretNum) {
    console.log('To low ho')
    } else if (guessNum > secretNum){
    console.log('To Highhh')
    } else {
    console.log('Winner winner')
    }         
}



