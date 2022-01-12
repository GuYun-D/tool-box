const input = document.querySelector('.input')
let id = 0

const inputChange = function () {
  console.log(`发送了${++id}次请求`);
}

input.addEventListener('input', debounce(inputChange, 3000))