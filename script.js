const displayEl = document.querySelector('.screen');
let buttons = document.querySelectorAll('.button')
const secondEl = document.querySelector('.second-display')

let current = []


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value
        
        
        displayEl.textContent += value
    })
    
})

const operate = (num1, operator1, num2, operator2, num3, operator3, num4) => {
    let newVal = []
    let total = []
    let newTotal = []
    if (operator1 === '+') {
        newVal = Number(num1) + Number(num2)
    } else if (operator1 === '-') {
        newVal = Number(num1) - Number(num2)
    } else if (operator1 === '*') {
        newVal = Number(num1) * Number(num2)
    } else if (operator1 === '/') {
        newVal = Number(num1) / Number(num2)
    }
    
    if (operator2 === '+') {
        total = Number(newVal) + Number(num3)
    } else if (operator2 === '-') {
        total = Number(newVal) - Number(num3)
    } else if (operator2 === '*') {
        total = Number(newVal) * Number(num3)
    } else if (operator2 === '/') {
        total = Number(newVal) / Number(num3)
    }

    if (operator3 === '+') {
        newTotal = Number(total) + Number(num4)
    } else if (operator3 === '-') {
        newTotal = Number(total) - Number(num4)
    } else if (operator3 === '*') {
        newTotal = Number(total) * Number(num4)
    } else if (operator3 === '/') {
        newTotal = Number(total) / Number(num4)
    }

    if (operator3) {
        displayEl.textContent = newTotal
    } else if(operator2) {
        displayEl.textContent = total
    } else {
        displayEl.textContent = newVal
    }

}

let plus = () => {
    current.push(displayEl.textContent)
    current.push('+')
    secondEl.textContent = current.join('')
    displayEl.textContent = ''
    console.log(current)

}
let minus = () => {
    current.push(displayEl.textContent)
    current.push('-')
    secondEl.textContent = current.join('')
    displayEl.textContent = ''
    console.log(current)
}

let times = () => {
    current.push(displayEl.textContent)
    current.push('*')
    secondEl.textContent = current.join('')
    displayEl.textContent = ''
    console.log(current)
}

let divide = () => {
    current.push(displayEl.textContent)
    current.push('/')
    secondEl.textContent = current.join('')
    displayEl.textContent = ''
    console.log(current)
}

const equals = () => {
    if(displayEl.textContent === '') {
        displayEl.textContent = 'ERROR'
    }
    current.push(displayEl.textContent)
    secondEl.textContent = current.join('')
    let newCurrent = current
    operate(newCurrent[0],newCurrent[1],newCurrent[2],newCurrent[3],newCurrent[4],newCurrent[5],newCurrent[6])
    secondEl.textContent += ` = ${displayEl.textContent}`
    displayEl.textContent = ''

}

const clean = () => {
    current = []
    displayEl.textContent = ''
    secondEl.textContent = ''
    console.log(current)
}

