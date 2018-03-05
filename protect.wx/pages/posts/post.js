var postsData = require('../../data/posts-data.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
    //动作A的执行，是在onload执行之后发生的。
    //绝大多数情况下直接对data赋值就行，onload下进行异步操作的话只能用setData
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      post_key: postsData.postList

      });
    //现在只能用setData
    // this.data.postList = postsData.postList 这种赋值的方法被淘汰了
  },
  onpostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    //只有连字符data-post-id 才会被改成postId 单独写 会变成小写s
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+ postId,
    })
  },
  onSwiperTap:function(event){
    //target与currentTarget 区别
    //前者指的是当前点击的组件  后者是事件捕获的组件
    //target指的是image  后者是swiper
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  },
})