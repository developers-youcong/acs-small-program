// pages/detail_add/detail_add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['交通', '餐饮', '生活'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    height: 20,
    focus: false
  },
  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
 
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow
    });
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
    var userCode = wx.getStorageSync('userId').toString();

    wx.request({
      url: getApp().globalData.urlPath + "spendingType/list",//json数据地址 
      data: {
        userCode: userCode,
        pageNo: "1",
        pageSize: "10"
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log("msg:" + res.data.msg);
        console.log("数据:" + res.data.datas);
      }
    })
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