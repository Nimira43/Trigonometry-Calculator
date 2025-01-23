document.addEventListener('DOMContentLoaded', () => {
  const output = document.querySelector('.output')
  const buttons = document.querySelectorAll('.btn')
  const operators = ['+', '-', '*', '/']
  const trigFunctions = new Map([
    ['sin', angle => Math.sin(angle).toFixed(8)],
    ['cos', angle => Math.cos(angle).toFixed(8)],
    ['tan', angle => Math.tan(angle).toFixed(8)],
    ['sec', angle => (1 / Math.cos(angle)).toFixed(8)],
    ['csc', angle => (1 / Math.sin(angle)).toFixed(8)],
    ['cot', angle => (1 / Math.tan(angle)).toFixed(8)]
  ])
  const otherFunctions = new Map([
    ['sqr', num => Math.sqrt(num).toFixed(8)],
    ['x^2', num => Math.pow(num, 2)]
  ])
  
  const calculate = (expression) => {
    try {
      return (new Function('return ' + expression))().toFixed(8);
    } catch {
      return 'Error';
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonValue = button.innerText
      let displayValue = output.innerText

      if (displayValue === '0') {
        displayValue = ''
      }

      if (buttonValue === '=') {
        displayValue = calculate(displayValue)
      
      } else if (buttonValue === 'C') {
        displayValue = '0'
      
      } else if (trigFunctions.has(buttonValue)) {
        const angle = parseFloat(displayValue)
        displayValue = isNaN(angle) ? 'Error' : trigFunctions.get(buttonValue)(angle)
      
      } else if (otherFunctions.has(buttonValue)) {
        const num = parseFloat(displayValue)
        displayValue = isNaN(num) ? 'Error' : otherFunctions.get(buttonValue)(num)
      
      } else {
        const lastChar = displayValue.slice(-1)
        
        if (operators.includes(buttonValue) && operators.includes(lastChar)) {
          displayValue = displayValue.slice(0, -1)
        }
        displayValue += buttonValue
      }

      output.innerText = displayValue
    })
  })
})
