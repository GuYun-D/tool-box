const input = document.querySelector('.input')
const btn = document.querySelector('button')
let id = 0

const inputChange = function (e) {
  console.log(`发送了${++id}次请求`);
  console.log(e, this)

  return "1234567890"
}

// input.addEventListener('input', debounce(inputChange, 3000, true))

// 取消用法，先拿到_debounce函数,回调形式拿返回值
const debounceChange = debounce(inputChange, 3000, false, (res) => {
  console.log("Promise形式拿到返回值:" + res);
})

const tempCallback = () => {
  debounceChange().then((res) => {
    console.log("Promise形式拿到返回值:" + res);
  })
}

// input.addEventListener('input', debounceChange)

// promise拿返回值不够优雅
input.addEventListener('input', tempCallback)

btn.addEventListener('click', function () {
  debounceChange.cancel()
})