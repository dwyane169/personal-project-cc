
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0//当前所在滑块的 index
  },
  //tab切换
  tab: function (event) {
    console.log(event.target.dataset.current);
    this.setData({ current: event.target.dataset.current })
  },
  //滑动事件
  eventchange: function (event) {
    console.log(event)
    this.setData({ current: event.detail.current })
  },

})