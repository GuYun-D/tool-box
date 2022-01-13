/**
 * 深拷贝
 * @param {Object} origin 要拷贝的对象
 * @returns {Object} content 拷贝成功之后的新对象
 */
function deepclone(origin) {
  // map 和 set 的拷贝目前依旧是浅拷贝，并没有对其键值进行判断
  // 如果是set
  if (origin instanceof Set) {
    return new Set([...origin])
  }

  // 如果是map
  if (origin instanceof Map) {
    return new Map([...origin])
  }

  // 如果是symbol
  if (typeof origin === "symbol") {
    return Symbol(origin.description)
  }
  // 如果是一个函数，直接返回,函数就是复用的，没有必要拷贝
  if (typeof origin === "function") return origin
  // 先进行第一次判断，如果是基本数据类型，直接返回
  if (!isObject(origin)) return origin

  const content = Array.isArray(origin) ? [] : {}

  for (const key in origin) {
    content[key] = deepclone(origin[key])
  }

  // forin无法遍历出symbol，所以使用forof
  // 获取到对象中的所有symbol键
  const symbolKeys = Object.getOwnPropertySymbols(origin)
  for (const sKey of symbolKeys) {
    content[sKey] = deepclone(origin[sKey])
  }

  return content
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