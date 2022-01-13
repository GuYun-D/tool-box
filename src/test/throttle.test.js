const input = document.querySelector('.input')
const btn = document.querySelector('button')
let id = 0

const inputChange = function () {
  console.log("输入框发生改变");
}

input.addEventListener('input', throttle(inputChange, 3000))