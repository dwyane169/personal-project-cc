Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  tab1: function () {
    wx.navigateTo({
      url: "/pages/tab1/tab1",
    })
  },
  tab2: function () {
    wx.navigateTo({
      url: "/pages/tab2/tab2",
    })
  },
  anchor:function(){
    wx.navigateTo({
      url: "/pages/anchor/anchor",
    })
  },
  pulldown:function(){
    wx.navigateTo({
      url: "/pages/pulldown/pulldown",
    })
  },
  pullUpOrDown:function(){
    wx.navigateTo({
      url: "/pages/pullUpOrDown/pullUpOrDown",
    })
  },
star:function(){
  wx.navigateTo({
    url: "/pages/star/star",
  })
},
  num:function(){
    wx.navigateTo({
      url: "/pages/numchange/numchange",
    })
  },
  all:function(){
    wx.navigateTo({
      url: "/pages/allcheckbox/allcheckbox",
    })
  },
  form: function () {
    wx.navigateTo({
      url: "/pages/formcheck/formcheck",
    })
  },
  noseam:function(){
    wx.navigateTo({
      url: '/pages/seamlessscrolling/seamlessscrolling',
    })
  },
  noseam2: function () {
    wx.navigateTo({
      url: '/pages/seamlessscrolling2/seamlessscrolling2',
    })
  },
  clock:function(){
    wx.navigateTo({
      url: '/pages/clockeffect/clockeffect',
    })
  },
  clock2: function () {
    wx.navigateTo({
      url: '/pages/clockeffect2/clockeffect2',
    })
  },
  clock3:function(){
    wx.navigateTo({
      url: '/pages/clockSifi/canvas',
    })
  },
  touch:function(){
    wx.navigateTo({
      url: '/pages/touch/touch',
    })
  },
  menu:function(){
    wx.navigateTo({
      url: '/pages/menu/menu',
    })
  }

})