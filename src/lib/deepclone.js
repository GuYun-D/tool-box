/**
 * 深拷贝
 * @param {Object} origin 要拷贝的对象
 * @returns {Object} newObj 拷贝成功之后的新对象
 */
function deepclone(origin) {
  // 先进行第一次判断，如果是基本数据类型，直接返回
  if (!isObject(origin)) return origin

  const newObj = {}

  for (const key in origin) {
    newObj[key] = deepclone(origin[key])
  }

  return newObj
}

/**
 * 判断是否是对象
 * @param {any} value 要判断的对象
 * @returns {Boolean}
 */
function isObject(value) {
  const type = typeof value
  return (type !== null) && (type === "object" || type === "function")
}