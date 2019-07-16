// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({

      title: "支出类型列表"

    })
    var userCode = wx.getStorageSync('userId');
    var self = this
    wx.request({
      url: getApp().globalData.urlPath + "spendingType/types",//json数据地址 
      data: {
        userCode: userCode
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        self.setData({

          types: res.data.data

        });//等同于

      }
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

  }
})