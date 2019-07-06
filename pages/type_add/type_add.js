// pages/type_add/type_add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit: function (e) {

    var userId = wx.getStorageSync('userId');

    var typeName = e.detail.value.typeName;

    var remark = e.detail.value.remark;
    

    if (typeName == null || typeName == "") {
      wx.showToast({
        title: "类型名不能为空",
        icon: 'none',
        duration: 1500
      })
    }else if(remark == null || remark == ""){
      wx.showToast({
        title: "备注不能为空",
        icon: 'none',
        duration: 1500
      })
    
    } else {



      wx.request({

        url: getApp().globalData.urlPath + "spendingType/add",
        method: "POST",
        data: {
          userId:userId,
          typeName: typeName,
          remark: remark
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log(res.data.code);
          
          if (res.statusCode == 200) {

            //访问正常
            if (res.data.code == "000000") {
              wx.showToast({
                title: "添加支出类型成功",
                icon: 'success',
                duration: 3000,
                success: function () {

                  wx.navigateTo({
                    url: '../type/type'
                  })
                }
              })

            }
          } else {

            wx.showLoading({
              title: '系统异常',
              fail
            })

            setTimeout(function () {
              wx.hideLoading()
            }, 2000)
          }

        }
      })
    }


  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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