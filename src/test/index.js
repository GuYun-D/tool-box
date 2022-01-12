const input = document.querySelector('.input')
const btn = document.querySelector('button')
let id = 0

const inputChange = function (e) {
  console.log(`发送了${++id}次请求`);
  console.log(e, this)
}

// input.addEventListener('input', debounce(inputChange, 3000, true))

// 取消用法，先拿到_debounce函数
const debounceChange = debounce(inputChange, 3000)

input.addEventListener('input', debounceChange)

btn.addEventListener('click', function(){
  debounceChange.cancel()
})