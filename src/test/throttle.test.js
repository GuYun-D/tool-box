const input = document.querySelector('.input')
const btn = document.querySelector('button')
let id = 0

const inputChange = function (e) {
  console.log("输入框发生改变");
  console.log(this)
  console.log(e)
}

input.addEventListener('input', throttle(inputChange, 3000, { leading: true, trailing: true }))