# 防抖、节流

  javascript是事件驱动的，大量的操作会触发事件，加入到事件队列中处理。而对于某些某些频繁的事件处理操作会消耗性能，通过防抖节流来实现事件频繁发生*

## 防抖debounce

- 场景：输入框的联想，在输入框输入时下方联想，当输入框停止输入时，等待s秒之后再触发事件，一般我们在监听input事件时就会触发联想，使用防抖进行性能的优化，即频繁搜索信息或者提交信息，滚动事件，浏览器的resize事件处理，当事件出发了一定的程度时进行回调处理，就是将事件延迟出发


## 节流 throttle

- 场景：如飞机大战，按空格进行子弹的发射，但是子弹不是无限的发射，在1s的时间段内就只发射一颗子弹，就是不管你在1s内按了几次空格，都只发送一颗子弹，就是按照一定的频率进行事件的触发，监听页面的滚动事件，鼠标移动事件，用户频繁点击按钮等



