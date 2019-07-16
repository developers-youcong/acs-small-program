// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post_key:""
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({

      title: "支出详情列表"

    })

    var self = this
    var userId = wx.getStorageSync('userId');
    console.log("userId:" + userId);
   
    wx.request({
      url: getApp().globalData.urlPath + "spendingDetail/recentList",//json数据地址 
      data: {
        userId: userId
        },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {

        self.setData({

          post_key: res.data.list

        });//等同于
  
      }
    })


  },
  onClick:function(){



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

  }
})