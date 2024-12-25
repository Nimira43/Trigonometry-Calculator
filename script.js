document.addEventListener('DOMContentLoaded', () => {
  const output = document.querySelector('.output')
  const buttons = document.querySelectorAll('.btn')
  const operators = ['+', '-', '*', '/']
  const trigFunctions = ['sin', 'cos', 'tan', 'sec', 'csc', 'cot']
  const otherFunctions = ['sqrt', 'x^2']
  const maxDecimals = 8

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonValue = button.innerText
      let displayValue = output.innerText
    
      if (displayValue === '0') {
        displayValue = ''
      }

      if (buttonValue === '=') {
        try {
          displayValue = eval(displayValue).toFixed(maxDecimals)
        } catch (e) {
          displayValue = 'Error'
        }
      } else if (buttonValue === 'C') {
        displayValue = '0'
      } else if (trigFunctions.includes(buttonValue)) {
        const angle = parseFloat(displayValue)
        if (!isNaN(angle)) {
          switch (buttonValue) {
            case 'sin':
              displayValue = Math.sin(angle).toFixed(maxDecimals)
              break
            case 'cos':
              displayValue = Math.cos(angle).toFixed(maxDecimals)
              break
            case 'tan':
              displayValue = Math.tan(angle).toFixed(maxDecimals)
              break
            case 'sec':
              displayValue = (1 / Math.cos(angle)).toFixed(maxDecimals)
              break
            case 'csc':
              displayValue = (1 / Math.sin(angle)).toFixed(maxDecimals)
              break
            case 'cot':
              displayValue = (1 / Math.tan(angle)).toFixed(maxDecimals)
              break
          }
        } else {
          displayValue = 'Error'
        }
      } else {
        const lastChar = displayValue.slice(-1)
        
        if (operators.includes(buttonValue)) {
          if (operators.includes(lastChar)) {
            displayValue = displayValue.slice(0, -1)
          } else {
            displayValue = eval(displayValue)
          }
        }
        displayValue += buttonValue
      }
      output.innerText = displayValue
    })
  })
})