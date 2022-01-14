const eventBus = new GYEventBus()

eventBus.on('abc', function () {
  console.log(this);
}, { name: "ghwugqyu" })


const handleDfggfN = function () {
  console.log(this);
}
eventBus.on('abc', handleDfggfN, { name: "qwe" })

eventBus.emit('abc', 123)


// 取消事件
eventBus.off('abc', handleDfggfN)
eventBus.emit('abc', 123)
