// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var userCode = "1";
    var pageNo = 1;
    var pageSize = 10;

    wx.request({
      url: getApp().globalData.urlPath + "/spendingDetail/list",//json数据地址 
      data: {
        userCode: userCode,
        pageNo: pageNo,
        pageSize: pageSize
        },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {

        console.log(res.data.code);
        console.log(res.data.msg)
        console.log(res.data.totalSize);

        // _this.setData({
        //   list_data: res.data.datas,
        //   //res代表success函数的事件对，data是固定的，imgListData是上面json数据中imgListData
        // })
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