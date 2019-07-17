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
  editDetail:function(e){
    let detailId = e.currentTarget.dataset['id'];
    console.log("detailId:" + detailId);

    wx.navigateTo({
      url: '../editDetail/editDetail?detailId='+detailId
    })
  },
  delDetail:function(e){
    let detailId = e.currentTarget.dataset['id'];
    console.log("detailId:" + detailId);

    wx.showModal({
      title: '提示',
      content: '确认要删除该支出详情?',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')

          wx.request({

            url: getApp().globalData.urlPath + "spendingDetail/delete",
            method: "POST",
            data: {
              detailId: detailId
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
                    title: "删除成功，返回支出详情列表",
                    icon: 'success',
                    duration: 3000,
                    success: function () {

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

                setTimeout(function () {
                  wx.hideLoading()
                }, 2000)
              }

            }
          })


        } else if (res.cancel) {
          console.log('用户点击取消')
        }
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