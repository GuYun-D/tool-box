/**
 * 节流函数
 * @param {Function} fn 节流要执行的函数
 * @param {Number} interval 时间间隔
 * @param {Object} options 节流的其他配置
 */

function throttle(fn, interval, options = {
  leading: true,
  trailing: false
}) {
  // 获取其他配置
  const { leading, trailing } = options
  // lastTime，回调函数执行的最后时刻
  let lastTime = 0
  let timer = null

  const _throttle = function () {
    // 记录此时要触发事件的事件
    const nowTime = new Date().getTime()
    // leading = false 时，第一次不会触发，及nowTime - lastTime = 0 时，但是仅限第一次，第一次lastTime = 0时 !0 = true 
    if (!lastTime && !leading) lastTime = nowTime
    // 计算时间差
    const remainTime = interval - (nowTime - lastTime)
    // 如果时间差小于等于0，说明可以触发事件了
    if (remainTime <= 0) {
      // 时间正好，后续没有继续输入，清除定时器
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      fn()
      // 保留上一次触时间
      lastTime = nowTime

      // 不需要定时器了，return
      return;
    }

    // 定时器只需要添加一个，当timer存在时不再添加定时器
    if (trailing && !timer) {
      timer = setTimeout(() => {
        // 不再进行输入了，所以重置数据
        timer = null
        /**
         * 如果配置了第一次执行的话，那么lastTime应该是0，若没有配置那么应该等于当前时间
         * 处理原因见图解
         */ 
        lastTime = !leading ? 0 : new Date().getTime()
        fn()
      }, remainTime);
    }
  }

  return _throttle
}