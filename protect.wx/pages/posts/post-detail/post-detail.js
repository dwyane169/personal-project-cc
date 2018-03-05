var postsData = require('../../../data/posts-data.js');
var app = getApp();
Page({
  data:{
    isPlaying : false,
  },
  onLoad:function(option){
    var globalData = app.globalData;
     var postId = option.id;
     var postData = postsData.postList[postId];
     this.setData({
        postId:postId
     });
    //  console.log(postData);
     this.setData({
        detailData : postData
     });
    // *****************************
      var collectedList = wx.getStorageSync('posts_collected');
      if (collectedList){
        if (collectedList[postId]){
          var ifCollected = collectedList[postId];
          this.setData({
            collected: ifCollected,
          });
        }else{
          collectedList[postId]=false;
          wx.setStorageSync('posts_collected', collectedList);
        }
      }else{
        var collectedList = {};
        wx.setStorageSync('posts_collected', collectedList);
        }
    //如果全局音乐播放变量是真，表明音乐在播放，把isPlaying设置为真这样
    //切换页面的时候 图标就不会变回去
    //并且 当前页面播放的音乐是当前页面ID的音乐 不然不播放
      if (app.globalData.GisPlaying && app.globalData.GcurrentMusicPostId === postId){
        this.setData({
          isPlaying : true
        });
      }
      this.setAudioMonitor();
  },

  setAudioMonitor:function(){
    //监听音乐播放
    var that = this;
    wx.onBackgroundAudioPlay(function () {
      that.setData({
        isPlaying: true
      });
      app.globalData.GisPlaying = true;
      app.globalData.GcurrentMusicPostId = that.data.postId
    });
    wx.onBackgroundAudioPause(function () {
      that.setData({
        isPlaying: false
      });
      app.globalData.GisPlaying = false;
      app.globalData.GcurrentMusicPostId = null;
    });
  },
  // *****************************异步方式用不好可能很多bug
  onCollectionTap:function(event){
    // this.getCollectedListSyc(); 这是同步
    this.getCollectedListAsy(); //这是异步 this要改为that 因为引用函数的是onCollectionTap
  },
  getCollectedListAsy:function(){
    var that = this;
    wx.getStorage({
      key:'posts_collected',
      success:function(res){
        var collectedList = res.data;
        var ifCollected = collectedList[that.data.postId];
        ifCollected = !ifCollected;
        collectedList[that.data.postId] = ifCollected;
        that.showModal(ifCollected, collectedList);
      }
    })
  },
  getCollectedListSyc:function(){
    var collectedList = wx.getStorageSync('posts_collected');
    var ifCollected = collectedList[this.data.postId];
    ifCollected = !ifCollected;
    collectedList[this.data.postId] = ifCollected;
    this.showModal(ifCollected, collectedList);
  },


  showModal: function (ifCollected, collectedList){
    var that = this;
    wx.showModal({
      title: '您是否',
      content: ifCollected?'收藏文章？':'取消收藏？',
      showCancel:'true',
      cancelText:'取消',
      cancelColor:'#8f000b',
      confirmText:'确认',
      confirmColor:'#ff5000',
      success:function(res){
        if(res.confirm){
          collectedList[that.data.postId] = ifCollected;
          wx.setStorageSync('posts_collected', collectedList);
          that.setData({
            collected: ifCollected
          })
          that.showToast(ifCollected);
        }
      },
    })
  },
  showToast: function (ifCollected){
    wx.showToast({
      title: ifCollected?'收藏成功':'取消收藏',
      icon: 'success',
      duration: 2000
    })
  },
  // *****************************
  onShareTap:function(event){
    var itemList = [
      "11111111111111",
      "22222222222222",
      "33333333333333",
      "44444444444444",
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor:"f3e",
      success:function(res){
         wx.showModal({
           title: '用户'+itemList[res.tapIndex],   //res.cancel确认用户是否点了取消按钮
           content: '用户是否取消?现在无法分享',
         })
      }
    })
  },
  //定义自己的播放器控件  官方有给出控件
  onMusicTap:function(event){
    var currentId = this.data.postId;
    var postData = postsData.postList[currentId];
    //公用部分提取 posiList = local_database;
    var isPlaying = this.data.isPlaying;
    if (isPlaying){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlaying: false
      });
    }else{
      wx.playBackgroundAudio({
        dataUrl: postData.music.url,
        title: postData.music.title,
        coverImgUrl: postData.music.coverImg,
      })
      this.setData({
        isPlaying: true
      });
    }
  },
});