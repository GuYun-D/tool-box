/**
 * 防抖函数
 * @param {Function} fn 延迟的函数
 * @param {Number} delay 延迟时间
 * @returns {function} 返回一个真正的防抖函数
 * 
 * 返回函数的目的：input.addEventListener('input', debounce(inputChange, 3000))
 * addEventListener中执行的回调函数是debounce执行的结果，如果没有返回函数，那么debounce的函数执行结果返回的是undefined
 */

function debounce(fn, delay) {
  // 存储定时器的标识符，防抖的目的就是当再次触发监听的事件时，定时器就得清除，只到正好到了延迟时间时才会触发处理的回调函数
  let timer = null
  // 默认的监听回调函数是可以传参的，比如说e，事件对象，所以放在arg中
  return function _debounce(...arg) {
    /**
     * 如果执行到这儿，说明两种情况
     * - 时间没到，但是监听的事件又触发了，上一个定时器肯定还没有执行，清除；
     * - 时间到了，开始执行回调
     */
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      /**
       * 函数this绑定,回调函数中应该是能访问到this的，这个this应该是dom元素
       * input.addEventListener('input', debounce(inputChange, 3000))中执行的函数是_debounce函数
       * 所以这个函数内部的this就是_debounce的this，定时器回调使用了箭头函数，所以箭头函数的this就是_debounce的this
       */
      fn.apply(this, arg)
    }, delay)
  }
}