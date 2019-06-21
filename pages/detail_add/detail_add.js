// pages/detail_add/detail_add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 20,
    focus: false
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：' + e.detail.value.amount + ", " + e.detail.value.typeId + ", " + this.data.remark + ", " + this.data.date + ", " + this.data.time);

    var amount = e.detail.value.amount;
    var typeId = e.detail.value.typeId;
    var date = this.data.date;
    var time = this.data.time;
    var remark = this.data.remark;
    var createDate = date + " " + time;
    console.log("date:" + date);
    console.log("time:" + time);
    console.log("createDate:" + createDate)
    if (amount == null || amount == "") {
      wx.showToast({
        title: "支出金额不能为空",
        icon: 'none',
        duration: 1500
      })
    } else if (typeId == null || typeId == "") {
      wx.showToast({
        title: "支出类型不能为空",
        icon: 'none',
        duration: 1500
      })

    } else if (date == null || date == "") {
      wx.showToast({
        title: "日期不能为空",
        icon: 'none',
        duration: 1500
      })
    } else if (time == null || time == "") {
      wx.showToast({
        title: "时间不能为空",
        icon: 'none',
        duration: 1500
      })
    } else if (remark == null || remark == "") {
      wx.showToast({
        title: "备注不能为空",
        icon: 'none',
        duration: 1500
      })
    } else {



      wx.request({

        url: getApp().globalData.urlPath + "spendingDetail/add",
        method: "POST",
        data: {
          amount: amount,
          typeId: typeId,
          createDate: createDate,
          remark: remark
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(res) {
          console.log(res.data.code);
          if (res.statusCode == 200) {

            //访问正常
            if (res.data.code == "000000") {
              wx.showToast({
                title: "添加支出详情成功",
                icon: 'success',
                duration: 3000,
                success: function() {

                  wx.navigateTo({
                    url: '../detail/detail'
                  })
                }
              })

            }
          } else {

            wx.showLoading({
              title: '系统异常',
              fail
            })

            setTimeout(function() {
              wx.hideLoading()
            }, 2000)
          }

        }
      })
    }


  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  bindTextAreaBlur: function(e) {
    this.setData({
      remark: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})