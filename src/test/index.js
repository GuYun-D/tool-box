const input = document.querySelector('.input')
let id = 0

const inputChange = function (e) {

  console.log(`发送了${++id}次请求`);
  console.log(e, this)
}

input.addEventListener('input', debounce(inputChange, 3000, true))