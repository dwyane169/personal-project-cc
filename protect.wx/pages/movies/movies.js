Page({

  /**
   * 页面的初始数据
   */
  data: {
    films:[],
    offset: 0,
    limit: 10,
    scrollHeight: 0,

    loading: true,
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hotUrl = 'https://m.maoyan.com/movie/list.json';
    this.getHotList(hotUrl)
  },
  detailMovie:function(ev){
    console.log(ev);
    var movieid = ev.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: 'hotMovie/movie-detail/movie-detail?id=' + movieid,
    })
  },
  getHotList:function(url){
    const that = this;
    wx.request({
      url: url,
      method:'GET',
      data:{
          type:"movies",
          offset:0,
          limit:10
      },
      header:{
        "content-type" : "application/json"
      },
      success(res){
          console.log(res);
          let films = that.data.films;
          films = films.concat(res.data.data.movies);
          console.log(films);
          that.setData({
            films: films,
            offset: that.data.offset + 10,
            loading: false,
          });
          console.log(that.data.films);
      },
    })
  },
  
})