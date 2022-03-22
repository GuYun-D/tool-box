Function.prototype.myCall = function (thisArgs, ...args) {
  const fn = this
  thisArgs = (thisArgs !== null && thisArgs !== undefined) ? Object(thisArgs) : window
  thisArgs.fn = fn
  const result = thisArgs.fn(...args)
  delete thisArgs.fn
  return result
}

Function.prototype.myApply = function (thisArgs, ...args) {
  const fn = this
  thisArgs = (thisArgs !== undefined && thisArgs !== null) ? Object(thisArgs) : window
  thisArgs.fn = fn
  const result = thisArgs.fn(...args)
  delete thisArgs.fn
  return result
}

Function.prototype.myBind = function (thisArgs, ...args1) {
  let index = 0
  const fn = this
  thisArgs = (thisArgs !== null && thisArgs !== undefined) ? Object(thisArgs) : window

  return function (...args2) {
    if (index === 1) return;
    thisArgs.fn = fn
    const fianlParam = [...args1, ...args2]
    const result = thisArgs.fn(...fianlParam)
    delete thisArgs.fn
    index++
    return result
  }
}