// const calculator = document.querySelector(‘.calculator’)

// const keys = calculator.querySelector(‘.calculator__keys’)

// keys.addEventListener(‘click’, e => {
//  if (e.target.matches(‘button’)) {
//    // Do something
//  }
// })
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
  }
})