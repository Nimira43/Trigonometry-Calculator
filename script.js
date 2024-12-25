// const calculator = document.querySelector('.calculator')
// const calculatorButtons = [['1', '2', '3', '+'], ['4', '5', '6', '-'], ['7', '8', '9', '*'], ['C', '0', '=', '/']]
// const operators = ['+', '-', '*', '/']
// let output

// document.addEventListener('DOMContentLoaded', () => {
//   output = document.createElement('div')
//   output.innerHTML = '0'
//   output.classList.add('output')
//   calculator.appendChild(output)
//   for (let y = 0; y < calculatorButtons.length; y++) {
//     let div = document.createElement('div')
//     div.classList.add('row')
//     for (let x = 0; x < calculatorButtons[y].length; x++) {
//       let btn = document.createElement('div')
//       btn.innerHTML = calculatorButtons[y][x]
//       btn.classList.add('btn')
//       btn.addEventListener('click', btnHit)
//       div.appendChild(btn)
//     }
//     calculator.appendChild(div)
//   }
// })

// function btnHit(e) {
//     let buttonValue = this.innerText
//     let calculateExpression = output.innerText
//     if (calculateExpression == '0') {
//         calculateExpression = ''
//     }
//     if (buttonValue == '=') {
//         calculateExpression = eval(calculateExpression)
//     }
//     else {
//         let characterCheck = calculateExpression.substring(calculateExpression.length - 1)
//         if (operators.includes(buttonValue)) {
//             if (operators.includes(characterCheck)) {
//                 calculateExpression = calculateExpression.substring(0, calculateExpression.length - 1)
//             }
//             else {
//                 calculateExpression = eval(calculateExpression)
//             }
//         }
//         calculateExpression = calculateExpression + buttonValue
//     }
//     if (buttonValue == 'C') {
//         calculateExpression = 0
//     }
//     output.innerText = calculateExpression
// }