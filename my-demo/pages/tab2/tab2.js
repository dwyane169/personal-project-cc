// pages/tabchange3/tabchange3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,//当前所在滑块的 index
    scrollLeft: 0,//滚动条的位置,一个选项卡宽度是90（自定义来自css），按比例90*n设置位置
    navlist: ["选项卡1", "选项卡2", "选项卡3", "选项卡4", "选项卡5"],
    conlist: ["内容1", "内容2", "内容3", "内容4", "内容5"]
  },
  //tab切换
  tab: function (event) {
    console.log(event.target.dataset.current);
    this.setData({ current: event.target.dataset.current })
    //锚点处理
    this.setData({ scrollLeft: event.target.dataset.current * 90 })
  },
  //滑动事件
  eventchange: function (event) {
    console.log(event.detail.current)
    this.setData({ current: event.detail.current })
    //锚点处理
    this.setData({ scrollLeft: event.detail.current * 90 })
  },

})