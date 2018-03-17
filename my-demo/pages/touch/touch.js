// pages/touch/touch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  containerTap: function (res) {
    console.log(res.touches[0]);
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 85;
    this.setData({
      rippleStyle: ''
    });
    this.setData({
      rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

})