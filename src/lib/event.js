class GYEventBus {
  constructor() {
    this.eventBus = {}
  }

  /**
   * 监听事件
   * @param {String} eventName 事件名称
   * @param {Function} eventCallBack 执行的回调函数
   * @param {Any} thisArguments 回调函数中this
   */
  on(eventName, eventCallBack, thisArguments) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }

    handlers.push({
      eventCallBack, thisArguments
    })
  }

  /**
   * 取消事件监听
   * @param {*} eventName 事件名称
   * @param {Function} eventCallBack 取消的回调函数
   */
  off(eventName, eventCallBack) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return;
    const newHandler = [...handlers]
    for (let i = 0; i < newHandler.length; i++) {
      const handler = newHandler[i]
      if (handler.eventCallBack === eventCallBack) {
        let index = handlers.indexOf(handler)
        handlers.splice(index, 1)
      }
    }

  }

  /**
   * 发出事件
   * @param {String} eventName 事件名称
   * @param  {...any} payload 参数传递
   */
  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return;
    handlers.forEach(handler => {
      handler.eventCallBack.apply(handler.thisArguments, payload)
    })
  }
}