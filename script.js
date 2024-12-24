const calculator = document.querySelector('.calculator')
const calculatorButtons = [['1', '2', '3', '+'], ['4', '5', '6', '-'], ['7', '8', '9', '*'], ['C', '0', '=', '/']]
const operands = ['+', '-', '*', '/']
let myOutput

document.addEventListener('DOMContentLoaded', () => {
  myOutput = document.createElement('div')
  myOutput.innerHTML = '0'
  myOutput.classList.add('output')
  calculator.appendChild(myOutput)
  for (let y = 0; y < calculatorButtons.length; y++) {
    let div = document.createElement('div')
    div.classList.add('row')
    for (let x = 0; x < calculatorButtons[y].length; x++) {
      let btn = document.createElement('div')
      btn.innerHTML = calculatorButtons[y][x]
      btn.classList.add('btn')
      btn.addEventListener('click', btnHit)
      div.appendChild(btn)
    }
    calculator.appendChild(div)
  }
})

function btnHit(e) {
    let myValue = this.innerText
    let myCal = myOutput.innerText
    if (myCal == '0') {
        myCal = ''
    }
    if (myValue == '=') {
        myCal = eval(myCal)
    }
    else {
        let lastChar = myCal.substring(myCal.length - 1)
        if (operands.includes(myValue)) {
            if (operands.includes(lastChar)) {
                myCal = myCal.substring(0, myCal.length - 1)
            }
            else {
                myCal = eval(myCal)
            }
        }
        myCal = myCal + myValue
    }
    if (myValue == 'C') {
        myCal = 0
    }
    myOutput.innerText = myCal
}