/**
 * 节流函数
 * @param {Function} fn 节流要执行的函数
 * @param {Number} interval 时间间隔
 */

function throttle(fn, interval) {
  // lastTime，回调函数执行的最后时刻
  let lastTime = 0
  const _throttle = function () {
    // 记录此时要触发事件的事件
    const nowTime = new Date().getTime()
    // 计算时间差
    const remainTime = interval - (nowTime - lastTime)
    // 如果时间差小于等于0，说明可以触发事件了
    if (remainTime <= 0) {
      fn()
      lastTime = nowTime
    }
  }

  return _throttle
}