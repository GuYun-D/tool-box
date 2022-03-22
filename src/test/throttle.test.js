const input = document.querySelector('.input')
const btn = document.querySelector('button')
let id = 0

const inputChange = function (e) {
  console.log("输入框发生改变");
  // console.log(this)
  // console.log(e)

  return "哈哈哈哈哈"
}


const _throttleFn = throttle(inputChange, 5000, {
 trailing: true, resultCallBack: function (res) {
    console.log(res);
  }
})

input.addEventListener('input', _throttleFn)

btn.addEventListener('click', () => {
  _throttleFn.cancel()
})