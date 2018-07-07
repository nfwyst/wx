Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    currentIndex: 0,
    weekly: [{
      name: '教父',
      image_url: '/images/poster.png',
      comment: '点评: 最精彩的剧本, 最真实的黑帮电影.................',
      highly: true
    }, {
      name: '教父',
      image_url: '/images/poster.png',
      comment: '点评: 最精彩的剧本, 最真实的黑帮电影.................',
      highly: true
    },{
      name: '教父',
      image_url: '/images/poster.png',
      comment: '点评: 最精彩的剧本, 最真实的黑帮电影.................',
      highly: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.weekly.length - 1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  toRec: function (event) {
    this.setData({
      currentIndex: this.data.weekly.length - 1
    }) 
  }
})
