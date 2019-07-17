// pages/editDetail/editDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailInfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.setNavigationBarTitle({

      title: "编辑支出详情"

    })

    var that = this;
    that.setData({                             //this.setData的方法用于把传递过来的id转化成小程序模板语言
      detailId: options.detailId
    })

    console.log("detailId:" + options.detailId);

    wx.request({
      url: getApp().globalData.urlPath + "spendingDetail/getByIdInfo", //json数据地址 
      data: {
        detailId: that.data.detailId
      },
      headers: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        
        console.log("detail info:" + res.data.detail)

        that.setData({

          detailInfo: res.data.detail

        })




      }
    })

 
    var userCode = wx.getStorageSync('userId').toString();

    wx.request({
      url: getApp().globalData.urlPath + "spendingType/types", //json数据地址 
      data: {
        userCode: userCode
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log("res.data.data.typeName:" + res.data.data)

        that.setData({

          selectData: res.data.data

        })


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