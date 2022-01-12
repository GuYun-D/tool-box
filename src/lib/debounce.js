/**
 * 防抖函数
 * @param {Function} fn 延迟的函数
 * @param {Number} delay 延迟时间
 * @param {Boolean} immdiate 立即执行 可配置参数
 * `  
 * 立即执行的原因就是：当我们连续输入时，目前实现的防抖函数只能等输入停止时才进行后续操作，立即执行就是输入时先执行一次，产生联想，提高用户体验
 * 
 * @returns {function} 返回一个真正的防抖函数
 * 
 * 返回函数的目的：input.addEventListener('input', debounce(inputChange, 3000))
 * addEventListener中执行的回调函数是debounce执行的结果，如果没有返回函数，那么debounce的函数执行结果返回的是undefined
 */

function debounce(fn, delay, immdiate = false) {
  // 存储定时器的标识符，防抖的目的就是当再次触发监听的事件时，定时器就得清除，只到正好到了延迟时间时才会触发处理的回调函数
  let timer = null
  // 判断是否立即执行过了
  let isInvoke = false

  // 默认的监听回调函数是可以传参的，比如说e，事件对象，所以放在arg中
  function _debounce(...arg) {
    /**
     * 如果执行到这儿，说明两种情况
     * - 时间没到，但是监听的事件又触发了，上一个定时器肯定还没有执行，清除；
     * - 时间到了，开始执行回调
     */
    if (timer) clearTimeout(timer)

    // 判断是否需要立即执行
    if (immdiate && !isInvoke) {
      fn.apply(this, arg)

      // 当立即执行了之后，置为false，直到回调执行了之后再开启立即执行
      isInvoke = false
    } else {
      timer = setTimeout(() => {
        /**
         * 函数this绑定,回调函数中应该是能访问到this的，这个this应该是dom元素
         * input.addEventListener('input', debounce(inputChange, 3000))中执行的函数是_debounce函数
         * 所以这个函数内部的this就是_debounce的this，定时器回调使用了箭头函数，所以箭头函数的this就是_debounce的this
         */
        fn.apply(this, arg)

        // 当执行了一次回调之后，将isInoke还原，当我们停止输入时,让下一次再进行立即执行
        isInvoke = false
        timer = null
      }, delay)
    }
  }

  // 取消功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false

  }

  return _debounce
}