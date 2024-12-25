document.addEventListener('DOMContentLoaded', () => {
  const output = document.querySelector('.output')
  const buttons = document.querySelectorAll('.btn')
  const operators = ['+', '-', '*', '/']
  const trigFunctions = ['sin', 'cos', 'tan']
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